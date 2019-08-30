import * as validators from './HelloWorldValidators'
import { RPCRequest, RPCResponse, RPCError, RPC } from 'jsonrpc-codegen/dist/RPC'
import * as resultTypes from './HelloWorldResults'
import { HelloWorld } from './HelloWorld'

export async function helloWorldHandler(handler: HelloWorld, msg: string): Promise<RPC> {
	let rpc: RPCRequest<any> = null
	// check parsing
	try {
		rpc = JSON.parse(msg)
	}
	catch(e) {
		return new RPCError(e, -32700)
	}

	// check conforms to JSON RPC standard
	if(rpc.jsonrpc != '2.0' || !rpc.method || !rpc.params) {
		return new RPCError('Not a JSON RPC', -32600)
	}

	// check and execute method
	switch(rpc.method) {
	case 'dontReply':
		if(!validators.dontReply(rpc.params)) {
			return new RPCError(validators.dontReply.errors.toString(), -32602)
		}
		return new RPCResponse<void>(rpc.method, await handler.dontReply(rpc.params))
	case 'sayHi':
		if(!validators.sayHi(rpc.params)) {
			return new RPCError(validators.sayHi.errors.toString(), -32602)
		}
		return new RPCResponse<resultTypes.SayHiResult>(rpc.method, await handler.sayHi(rpc.params))
	default:
		return new RPCError('Method does not exist', -32601)
	}
}
export const helloWorldHandlerHOF = (handler: HelloWorld) => (msg: string) => helloWorldHandler(handler, msg)