import { Writable } from "stream";
import { WriteStream } from "fs-extra";
import * as path from 'path'
import { Method } from "./Method";
import { compile, Options } from 'json-schema-to-typescript'
import { toPascalCase } from "./changeCase";

export async function processMethod(method: Method, 
	interfaceStream: WriteStream, 
	paramsStream: WriteStream, 
	resultStream: WriteStream,
	handlerStream: WriteStream,
	validatorStream: WriteStream,
	abstractClass: boolean = false) {
	const paramTypeName = `${toPascalCase(method.name)}Params`
	const resultTypeName = `${toPascalCase(method.name)}Result`

	const compileOpts: Partial<Options> = {
		bannerComment: '',
		cwd: path.dirname(method.filePath),
		style: {
			useTabs: true,
			tabWidth: 4,

		}
	}

	if(method.params) {
		paramsStream.write(await compile(method.params, paramTypeName, compileOpts))
		paramsStream.write('\n')

		validatorStream.write(
			`export const ${method.name} = ajv.compile(${JSON.stringify(method.params, null, 2)})\n`
		)
	}
	if(method.result) {
		resultStream.write(await compile(method.result, resultTypeName, compileOpts))
	}

	const paramList = !!method.params ? `params: paramTypes.${paramTypeName}` : ''
	const resultType = !!method.result ? `resultTypes.${resultTypeName}` : 'void'

	const methodPrefix = abstractClass ? 'abstract async ' : ''
	interfaceStream.write(`\t${methodPrefix}${method.name}(${paramList}): Promise<${resultType}>\n`)

	handlerStream.write(
`\tcase '${method.name}':\n`
	)
	if(method.params) {
		handlerStream.write(
`\t\tif(!validators.${method.name}(rpc.params)) {
			return new RPCError(JSON.stringify(validators.${method.name}.errors), -32602)
		}\n`
		)
	}
	handlerStream.write(
		`\t\treturn new RPCResponse<${resultType}>(rpc.method, await handler.${method.name}(${!!method.params ? 'rpc.params' : ''}))\n`
	)
}