export declare class RPC {
    jsonrpc: string;
}
export declare class RPCRequest<T> extends RPC {
    method: string;
    params: T;
    id?: number | string;
    constructor(method: string, params: T);
}
export declare class RPCResponse<T> extends RPC {
    method: string;
    result: T;
    id?: number | string;
    constructor(method: string, result: T);
}
export declare class RPCError extends RPC {
    code: number;
    message: string;
    constructor(err: Error | string, code?: number);
}
