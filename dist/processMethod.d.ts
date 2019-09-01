/// <reference types="node" />
import { WriteStream } from "fs-extra";
import { Method } from "./Method";
export declare function processMethod(method: Method, interfaceStream: WriteStream, paramsStream: WriteStream, resultStream: WriteStream, handlerStream: WriteStream, validatorStream: WriteStream, abstractClass?: boolean): Promise<void>;
