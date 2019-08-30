import { Echo } from "./jsonrpc/Echo";
import { EchoParams } from "./jsonrpc/EchoParams";
import { EchoResult } from "./jsonrpc/EchoResults";
import { echoHandler, echoHandlerHOF } from './jsonrpc/EchoHandler'
import * as assert from 'assert'
import { RPCError, RPCResponse } from "../../dist/RPC";
import { HelloWorld } from "./jsonrpc/HelloWorld";
import { SayHiParams, DontReplyParams } from "./jsonrpc/HelloWorldParams";
import { SayHiResult } from "./jsonrpc/HelloWorldResults";
import { helloWorldHandlerHOF } from "./jsonrpc/HelloWorldHandler";

class EchoTester implements Echo {
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
const invalidParams = JSON.stringify({
	jsonrpc: '2.0',
	method: 'potato',
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
class HelloWorldImpl implements HelloWorld {
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
	assert(notJson instanceof RPCError && notJson.code == -32700)

	const malformed = await echoHandler(malformedRpc)
	console.log('malformed', malformedRpc)
	assert(malformed instanceof RPCError && malformed.code == -32600)

	const invalid = await echoHandler(invalidParams)
	console.log('invalid', invalid)
	assert(invalid instanceof RPCError && invalid.code == -32601)

	const valid = await echoHandler(validParams)
	console.log('valid', valid)
	assert(valid instanceof RPCResponse && valid.result.echo == 'potato salad')

	const hiHandler = helloWorldHandlerHOF(new HelloWorldImpl())
	console.log('ALL TESTS PASSED 🎉')
})()
