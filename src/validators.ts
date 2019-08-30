import * as Ajv from 'ajv'
import * as path from 'path'
const ajv = Ajv()
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'))

const docsFolder = path.join(__dirname, '../docs')

function getValidator(name: string) {
	return ajv.compile(require(path.join(docsFolder, name)))
}

export const configValidator = getValidator('jsonrpc.schema.json')
export const methodValidator = getValidator('method.schema.json')
