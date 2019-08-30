import { type } from "os";

export class RPC {
	jsonrpc = '2.0'
}
export class RPCRequest<T> extends RPC {
	method: string
	params: T
	id?: number | string
	constructor(method: string, params: T) {
		super()
		this.method = method
		this.params = params
	}
}
export class RPCResponse<T> extends RPC {
	method: string
	result: T
	id?: number | string
	constructor(method: string, result: T) {
		super()
		this.method = method
		this.result = result
	}
}
export class RPCError extends RPC {
	code: number
	message: string
	constructor(err: Error | string, code = 1) {
		super()
		this.code = code
		if(typeof(err) == 'string') {
			this.message = err
		}
		else {
			this.message = `${err.name}: ${err.message}`
		}
	}
}