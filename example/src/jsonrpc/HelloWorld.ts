import * as paramTypes from './HelloWorldParams'
import * as resultTypes from './HelloWorldResults'
export interface HelloWorld {
	dontReply(params: paramTypes.DontReplyParams): Promise<void>
	sayHi(params: paramTypes.SayHiParams): Promise<resultTypes.SayHiResult>
}