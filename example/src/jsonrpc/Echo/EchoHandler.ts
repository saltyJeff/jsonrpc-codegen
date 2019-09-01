import * as validators from './EchoValidators'
import { RPCRequest, RPCResponse, RPCError, RPC } from 'jsonrpc-codegen/dist/RPC'
import * as resultTypes from './EchoResults'
import { Echo } from './Echo'

export async function echoHandler(handler: Echo, msg: string): Promise<RPC> {
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
	case 'echo':
		if(!validators.echo(rpc.params)) {
			return new RPCError(JSON.stringify(validators.echo.errors), -32602)
		}
		return new RPCResponse<resultTypes.EchoResult>(rpc.method, await handler.echo(rpc.params))
	default:
		return new RPCError('Method does not exist', -32601)
	}
}
export const echoHandlerHOF = (handler: Echo) => (msg: string) => echoHandler(handler, msg)