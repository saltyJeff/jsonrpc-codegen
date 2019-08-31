#!/usr/bin/env node
require('source-map-support').install()
const startTime = Date.now()
import { getLogger } from 'log4js'
import * as path from 'path'
import * as fs from 'fs-extra'
import * as fg from 'fast-glob'
import { configValidator } from './validators'
import { Config } from './Config';
import { validateAndParse } from './validateAndParse';
import { sortIntoEndpoints } from './sortIntoEndpoints';
import { processMethod } from './processMethod';
import { handlerFileBottom, handlerFileTop } from './handlerFile';
getLogger().level = 'warn'

const logger = getLogger('jsonrpc-codegen')
const rootDir = process.argv.length <= 2 ? process.cwd() : path.resolve(process.cwd(), process.argv[2])
logger.warn(`Generating JSON-RPC definitions from: ${rootDir}`)

// load configuration
const configPath = path.join(rootDir, 'jsonrpc.json')
if(!fs.existsSync(configPath)) {
    logger.error(`No configuration found in: ${configPath}`)
    process.exit(1)
}
const config: Config = require(configPath)
if(!configValidator(config)) {
    logger.error(`Invalid configuration`)
    logger.error(configValidator.errors)
    process.exit(1)
}

// ensure outdir exists
fs.ensureDirSync(path.join(rootDir, config.outDir))

// get array of files
// resolve all globs to rootdir
const globs = config.include.map((glob) => path.join(rootDir, glob))
const filePromise = fg(globs, {
    dot: false
})
filePromise.then(async (files) => {
    const schemas = await Promise.all(files.map((file) => validateAndParse(file.toString())))
    const endpointMethods = sortIntoEndpoints(schemas)
    const outputDir = path.join(rootDir, config.outDir)

    for(let [endpoint, methods] of endpointMethods.entries()) {
        // 3 files are generated for each method: methods, params, and returns
        const endpointOutputDir = path.join(outputDir, endpoint)
        await fs.ensureDir(endpointOutputDir)
        const interfaceFile = path.join(endpointOutputDir, endpoint+'.ts')
        const paramsFile = path.join(endpointOutputDir, endpoint+'Params.ts')
        const returnFile = path.join(endpointOutputDir, endpoint+'Results.ts')
        const handlerFile = path.join(endpointOutputDir, endpoint+'Handler.ts')
        const validatorFile = path.join(endpointOutputDir, endpoint+'Validators.ts')

        const interfaceStream = fs.createWriteStream(interfaceFile, {
            flags: 'w'
        })
        const paramsStream = fs.createWriteStream(paramsFile, {
            flags: 'w'
        })
        const returnStream = fs.createWriteStream(returnFile, {
            flags: 'w'
        })
        const handlerStream = fs.createWriteStream(handlerFile, {
            flags: 'w'
        })
        const validatorStream = fs.createWriteStream(validatorFile, {
            flags: 'w'
        })

        interfaceStream.write(`import * as paramTypes from './${endpoint}Params'\n`)
        interfaceStream.write(`import * as resultTypes from './${endpoint}Results'\n`)
        interfaceStream.write(`export interface ${endpoint} {\n`)
        handlerStream.write(handlerFileTop(endpoint))
        validatorStream.write(
`import * as Ajv from 'ajv'
const ajv = Ajv()
`)


        await Promise.all(methods.map((method) => processMethod(method, interfaceStream, paramsStream, returnStream, handlerStream, validatorStream)))

        interfaceStream.write('}')
        handlerStream.write(handlerFileBottom(endpoint))

        interfaceStream.end()
        paramsStream.end()
        returnStream.end()
        handlerStream.end()
        validatorStream.end()
    }
    logger.warn(`Complete in ${(Date.now() - startTime) / 1000}s`)
})