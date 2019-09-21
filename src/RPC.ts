import { type } from "os";

export class RPC {
	jsonrpc = '2.0'
}
export class RPCRequest<T> extends RPC {
	method: string
	params: T
	id?: number | string
	constructor(method: string, params: T, id?: number | string) {
		super()
		this.method = method
		this.params = params
		this.id = id
	}
}
export class RPCResponse extends RPC {
	id?: number | string
	constructor(id?: number | string | null) {
		super()
		this.id = id
	}
}
export class RPCSuccess<T> extends RPCResponse {
	result: T
	constructor(result: T, id?: number | string) {
		super(id)
		this.result = result
	}
}
export class RPCError extends RPCResponse {
	error: {
		code: number
		message: string
	}
	constructor(err: Error | string, code = 1, id?: number | string) {
		super(!!id ? id : null)
		this.error = {
			message: typeof(err) == 'string' ? err : `${err.name}: ${err.message}`,
			code: code
		}
	}
}