"use strict";
exports.__esModule = true;
var changeCase_1 = require("./changeCase");
function handlerFileTop(endpoint) {
    return "import * as validators from './" + endpoint + "Validators'\nimport { RPCRequest, RPCResponse, RPCError, RPC } from 'jsonrpc-codegen/dist/RPC'\nimport * as resultTypes from './" + endpoint + "Results'\nimport { " + endpoint + " } from './" + endpoint + "'\n\nexport async function " + changeCase_1.toCamelCase(endpoint) + "Handler(handler: " + endpoint + ", msg: string): Promise<RPC> {\n\tlet rpc: RPCRequest<any> = null\n\t// check parsing\n\ttry {\n\t\trpc = JSON.parse(msg)\n\t}\n\tcatch(e) {\n\t\treturn new RPCError(e, -32700)\n\t}\n\n\t// check conforms to JSON RPC standard\n\tif(rpc.jsonrpc != '2.0' || !rpc.method || !rpc.params) {\n\t\treturn new RPCError('Not a JSON RPC', -32600)\n\t}\n\n\t// check and execute method\n\tswitch(rpc.method) {\n";
}
exports.handlerFileTop = handlerFileTop;
function handlerFileBottom(endpoint) {
    return "\tdefault:\n\t\treturn new RPCError('Method does not exist', -32601)\n\t}\n}\nexport const " + changeCase_1.toCamelCase(endpoint) + "HandlerHOF = (handler: " + endpoint + ") => (msg: string) => " + changeCase_1.toCamelCase(endpoint) + "Handler(handler, msg)";
}
exports.handlerFileBottom = handlerFileBottom;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlckZpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaGFuZGxlckZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBMkM7QUFFM0MsU0FBZ0IsY0FBYyxDQUFDLFFBQWdCO0lBQy9DLE9BQU8sb0NBQWtDLFFBQVEsd0lBRWYsUUFBUSwyQkFDL0IsUUFBUSxtQkFBYyxRQUFRLG1DQUVqQix3QkFBVyxDQUFDLFFBQVEsQ0FBQyx5QkFBb0IsUUFBUSxxWkFpQnhFLENBQUE7QUFDRCxDQUFDO0FBeEJELHdDQXdCQztBQUVELFNBQWdCLGlCQUFpQixDQUFDLFFBQWdCO0lBQ2xELE9BQU8sZ0dBSVEsd0JBQVcsQ0FBQyxRQUFRLENBQUMsK0JBQTBCLFFBQVEsOEJBQXlCLHdCQUFXLENBQUMsUUFBUSxDQUFDLDBCQUF1QixDQUFBO0FBQzNJLENBQUM7QUFORCw4Q0FNQyJ9