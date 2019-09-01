import * as Ajv from 'ajv'
const ajv = Ajv()
export const echo = ajv.compile({
  "properties": {
    "str": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "type": "object"
})
