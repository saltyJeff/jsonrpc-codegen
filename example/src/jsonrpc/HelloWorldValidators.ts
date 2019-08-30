import * as Ajv from 'ajv'
const ajv = Ajv()
export const dontReply = ajv.compile({
  "properties": {
    "msg": {
      "type": "string"
    }
  },
  "type": "object"
})
export const sayHi = ajv.compile({
  "additionProperties": false,
  "type": "object"
})
