import * as Ajv from 'ajv'
const ajv = Ajv()
export const dontReply = ajv.compile({
  "properties": {
    "msg": {
      "type": "string"
    }
  },
  "type": "object",
  "required": [
    "msg"
  ],
  "additionalProperties": false
})
export const typesOnly = ajv.compile({
  "properties": {
    "SHOULD NOT BE PROCESSED": {
      "type": "string"
    }
  },
  "type": "object",
  "required": [
    "SHOULD NOT BE PROCESSED"
  ],
  "additionalProperties": false
})
export const sayHi = ajv.compile({
  "additionalProperties": false,
  "type": "object"
})
