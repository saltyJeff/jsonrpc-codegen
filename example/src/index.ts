import { Echo } from "./jsonrpc/Echo/Echo";
import { EchoParams } from "./jsonrpc/Echo/EchoParams";
import { EchoResult } from "./jsonrpc/Echo/EchoResults";
import { echoHandler, echoHandlerHOF } from './jsonrpc/Echo/EchoHandler'
import * as assert from 'assert'
import { RPCError, RPCResponse, RPC } from 'jsonrpc-codegen/dist/RPC'
import { HelloWorld } from "./jsonrpc/HelloWorld/HelloWorld";
import { SayHiParams, DontReplyParams } from "./jsonrpc/HelloWorld/HelloWorldParams";
import { SayHiResult } from "./jsonrpc/HelloWorld/HelloWorldResults";
import { helloWorldHandlerHOF } from "./jsonrpc/HelloWorld/HelloWorldHandler";

class EchoTester extends Echo {
	async echo(params: EchoParams): Promise<EchoResult> {
		return {
			echo: params.str
		}
	}
}

const isThisEvenJson = "potato salad"
const malformedRpc = JSON.stringify({
	"function": "should be called method"
})
const invalidMethod = JSON.stringify({
	jsonrpc: '2.0',
	method: 'potato',
	params: {
		potato: 'salad'
	}
})
const invalidParam = JSON.stringify({
	jsonrpc: '2.0',
	method: 'echo',
	params: {
		potato: 'salad'
	}
})
const validParams = JSON.stringify({
	jsonrpc: '2.0',
	method: 'echo',
	params: {
		str: 'potato salad'
	}
})

// just here to check if it compiles (no result / no parameters)
class HelloWorldImpl extends HelloWorld {
	async sayHi(params: SayHiParams): Promise<SayHiResult> {
		return {
			hi: 'Hello World'
		}
	}
	async dontReply(params: DontReplyParams): Promise<void> {

	}
}

;(async () => {
	const echoHandler = echoHandlerHOF(new EchoTester())

	const notJson = await echoHandler(isThisEvenJson)
	console.log('notJson', notJson)
	assert(notJson instanceof RPCError)

	const malformed = await echoHandler(malformedRpc)
	console.log('malformed', malformedRpc)
	assert(malformed instanceof RPCError && malformed.code == -32600)

	const invalidMethodResult = await echoHandler(invalidMethod)
	console.log('invalid method', invalidMethodResult)
	assert(invalidMethodResult instanceof RPCError && invalidMethodResult.code == -32601)

	const invalidParamResult = await echoHandler(invalidParam)
	console.log('invalid param', invalidParamResult)
	assert(invalidParamResult instanceof RPCError && invalidParamResult.code == -32602)

	const valid = await echoHandler(validParams)
	console.log('valid', valid)
	assert(valid instanceof RPCResponse && valid.result.echo == 'potato salad')

	const hiHandler = helloWorldHandlerHOF(new HelloWorldImpl())
	console.log('ALL TESTS PASSED 🎉')
})()
