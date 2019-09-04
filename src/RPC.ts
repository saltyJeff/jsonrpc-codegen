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
export class RPCResponse extends RPC {
	method: string
	id?: number | string
	constructor(method: string, id?: number | string | null) {
		super()
		this.method = method
		this.id = id
	}
}
export class RPCSuccess<T> extends RPCResponse {
	result: T
	constructor(method: string, result: T, id?: number | string) {
		super(method, id)
		this.result = result
	}
}
export class RPCError extends RPCResponse {
	error: {
		code: number
		message: string
	}
	constructor(method: string, err: Error | string, code = 1, id?: any) {
		super(method, null)
		this.error = {
			message: typeof(err) == 'string' ? err : `${err.name}: ${err.message}`,
			code: code
		}
	}
}