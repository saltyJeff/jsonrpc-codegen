import * as validators from './HelloWorldValidators'
import { RPCRequest, RPCSuccess, RPCError, RPC } from 'jsonrpc-codegen/dist/RPC'
import * as resultTypes from './HelloWorldResults'
import { HelloWorld } from './HelloWorld'

export async function helloWorldHandler(handler: HelloWorld, msg: string): Promise<RPC> {
	let rpc: RPCRequest<any> = {} as unknown as any // just a temporary value
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
	const id = rpc.id
	switch(rpc.method) {
	case 'dontReply':
		if(!validators.dontReply(rpc.params)) {
			return new RPCError(JSON.stringify(validators.dontReply.errors), -32602)
		}
		return new RPCSuccess<void>(await handler.dontReply(rpc.params), id)
	case 'sayHi':
		if(!validators.sayHi(rpc.params)) {
			return new RPCError(JSON.stringify(validators.sayHi.errors), -32602)
		}
		return new RPCSuccess<resultTypes.SayHiResult>(await handler.sayHi(rpc.params), id)
	default:
		return new RPCError('Method does not exist', -32601)
	}
}
export const helloWorldHandlerHOF = (handler: HelloWorld) => (msg: string) => helloWorldHandler(handler, msg)