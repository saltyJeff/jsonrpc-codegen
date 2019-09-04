export declare class RPC {
    jsonrpc: string;
}
export declare class RPCRequest<T> extends RPC {
    method: string;
    params: T;
    id?: number | string;
    constructor(method: string, params: T, id?: number | string);
}
export declare class RPCResponse extends RPC {
    id?: number | string;
    constructor(id?: number | string | null);
}
export declare class RPCSuccess<T> extends RPCResponse {
    result: T;
    constructor(result: T, id?: number | string);
}
export declare class RPCError extends RPCResponse {
    error: {
        code: number;
        message: string;
    };
    constructor(err: Error | string, code?: number, id?: any);
}
