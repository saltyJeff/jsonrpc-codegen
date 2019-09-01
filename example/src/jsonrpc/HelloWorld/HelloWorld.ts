import * as paramTypes from './HelloWorldParams'
import * as resultTypes from './HelloWorldResults'
export abstract class HelloWorld {
	abstract async dontReply(params: paramTypes.DontReplyParams): Promise<void>
	abstract async sayHi(params: paramTypes.SayHiParams): Promise<resultTypes.SayHiResult>
}