import { Method } from "./Method";
import * as path from 'path'
import { methodValidator } from "./validators";
import { getLogger } from 'log4js'
import { toPascalCase, toCamelCase } from "./changeCase";

const logger = getLogger('Schema parser')

export async function validateAndParse(file: string): Promise<Method> {
	const method: Method = require(file)
	if(!methodValidator(method)) {
		const errStr = `Method ${file} is invalid\n${methodValidator.errors.toString()}`
		logger.error(errStr)
		throw Error(errStr)
	}
	if(!method.endpointName) {
		const parentDir = path.basename(path.dirname(file))
		method.endpointName = toPascalCase(parentDir)
	}
	if(!method.name) {
		let filename = path.basename(file)
		filename = filename.substring(0, filename.indexOf('.'))
		method.name = toCamelCase(filename)
	}
	if(!!method.params) {
		method.params.type = 'object'

		// we establish the defaults: all properties are required and no additional params are allowed
		// you can still override it thru the JSON schema
		if(!!method.params.properties) {
			if(method.params.required === undefined) {
				const keys = Object.keys(method.params.properties)
				if(!!keys && keys.length > 0) {
					method.params.required = keys
				}
			}
			if(method.params.additionalProperties === undefined) {
				method.params.additionalProperties = false
			}
		}
	}
	if(!!method.result) {
		method.result.type = 'object'
	}
	method.filePath = file
	return method
}