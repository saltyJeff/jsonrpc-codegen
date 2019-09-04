import { toCamelCase } from "./changeCase";

export function handlerFileTop(endpoint: string): string {
return `import * as validators from './${endpoint}Validators'
import { RPCRequest, RPCSuccess, RPCError, RPC } from 'jsonrpc-codegen/dist/RPC'
import * as resultTypes from './${endpoint}Results'
import { ${endpoint} } from './${endpoint}'

export async function ${toCamelCase(endpoint)}Handler(handler: ${endpoint}, msg: string): Promise<RPC> {
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
`
}

export function handlerFileBottom(endpoint: string): string {
return `\tdefault:
		return new RPCError('Method does not exist', -32601)
	}
}
export const ${toCamelCase(endpoint)}HandlerHOF = (handler: ${endpoint}) => (msg: string) => ${toCamelCase(endpoint)}Handler(handler, msg)`
}