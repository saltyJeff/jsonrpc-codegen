"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var path = require("path");
var json_schema_to_typescript_1 = require("json-schema-to-typescript");
var changeCase_1 = require("./changeCase");
function processMethod(method, interfaceStream, paramsStream, resultStream, handlerStream, validatorStream) {
    return __awaiter(this, void 0, void 0, function () {
        var paramTypeName, resultTypeName, compileOpts, _a, _b, _c, _d, paramList, resultType;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    paramTypeName = changeCase_1.toPascalCase(method.name) + "Params";
                    resultTypeName = changeCase_1.toPascalCase(method.name) + "Result";
                    compileOpts = {
                        bannerComment: '',
                        cwd: path.dirname(method.filePath),
                        style: {
                            useTabs: true,
                            tabWidth: 4
                        }
                    };
                    if (!method.params) return [3 /*break*/, 2];
                    _b = (_a = paramsStream).write;
                    return [4 /*yield*/, json_schema_to_typescript_1.compile(method.params, paramTypeName, compileOpts)];
                case 1:
                    _b.apply(_a, [_e.sent()]);
                    paramsStream.write('\n');
                    validatorStream.write("export const " + method.name + " = ajv.compile(" + JSON.stringify(method.params, null, 2) + ")\n");
                    _e.label = 2;
                case 2:
                    if (!method.result) return [3 /*break*/, 4];
                    _d = (_c = resultStream).write;
                    return [4 /*yield*/, json_schema_to_typescript_1.compile(method.result, resultTypeName, compileOpts)];
                case 3:
                    _d.apply(_c, [_e.sent()]);
                    _e.label = 4;
                case 4:
                    paramList = !!method.params ? "params: paramTypes." + paramTypeName : '';
                    resultType = !!method.result ? "resultTypes." + resultTypeName : 'void';
                    interfaceStream.write("\t" + method.name + "(" + paramList + "): Promise<" + resultType + ">\n");
                    handlerStream.write("\tcase '" + method.name + "':\n");
                    if (method.params) {
                        handlerStream.write("\t\tif(!validators." + method.name + "(rpc.params)) {\n\t\t\treturn new RPCError(validators." + method.name + ".errors.toString(), -32602)\n\t\t}\n");
                    }
                    handlerStream.write("\t\treturn new RPCResponse<" + resultType + ">(rpc.method, await handler." + method.name + "(" + (!!method.params ? 'rpc.params' : '') + "))\n");
                    return [2 /*return*/];
            }
        });
    });
}
exports.processMethod = processMethod;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzc01ldGhvZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9jZXNzTWV0aG9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsMkJBQTRCO0FBRTVCLHVFQUE0RDtBQUM1RCwyQ0FBNEM7QUFFNUMsU0FBc0IsYUFBYSxDQUFDLE1BQWMsRUFDakQsZUFBNEIsRUFDNUIsWUFBeUIsRUFDekIsWUFBeUIsRUFDekIsYUFBMEIsRUFDMUIsZUFBNEI7Ozs7OztvQkFDdEIsYUFBYSxHQUFNLHlCQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFRLENBQUE7b0JBQ3BELGNBQWMsR0FBTSx5QkFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBUSxDQUFBO29CQUVyRCxXQUFXLEdBQXFCO3dCQUNyQyxhQUFhLEVBQUUsRUFBRTt3QkFDakIsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzt3QkFDbEMsS0FBSyxFQUFFOzRCQUNOLE9BQU8sRUFBRSxJQUFJOzRCQUNiLFFBQVEsRUFBRSxDQUFDO3lCQUVYO3FCQUNELENBQUE7eUJBRUUsTUFBTSxDQUFDLE1BQU0sRUFBYix3QkFBYTtvQkFDZixLQUFBLENBQUEsS0FBQSxZQUFZLENBQUEsQ0FBQyxLQUFLLENBQUE7b0JBQUMscUJBQU0sbUNBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUMsRUFBQTs7b0JBQTNFLGNBQW1CLFNBQXdELEVBQUMsQ0FBQTtvQkFDNUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFFeEIsZUFBZSxDQUFDLEtBQUssQ0FDcEIsa0JBQWdCLE1BQU0sQ0FBQyxJQUFJLHVCQUFrQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxRQUFLLENBQ3hGLENBQUE7Ozt5QkFFQyxNQUFNLENBQUMsTUFBTSxFQUFiLHdCQUFhO29CQUNmLEtBQUEsQ0FBQSxLQUFBLFlBQVksQ0FBQSxDQUFDLEtBQUssQ0FBQTtvQkFBQyxxQkFBTSxtQ0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLFdBQVcsQ0FBQyxFQUFBOztvQkFBNUUsY0FBbUIsU0FBeUQsRUFBQyxDQUFBOzs7b0JBR3hFLFNBQVMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsd0JBQXNCLGFBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO29CQUN4RSxVQUFVLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGlCQUFlLGNBQWdCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQTtvQkFFN0UsZUFBZSxDQUFDLEtBQUssQ0FBQyxPQUFLLE1BQU0sQ0FBQyxJQUFJLFNBQUksU0FBUyxtQkFBYyxVQUFVLFFBQUssQ0FBQyxDQUFBO29CQUVqRixhQUFhLENBQUMsS0FBSyxDQUNwQixhQUFXLE1BQU0sQ0FBQyxJQUFJLFNBQU0sQ0FDMUIsQ0FBQTtvQkFDRCxJQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUU7d0JBQ2pCLGFBQWEsQ0FBQyxLQUFLLENBQ3JCLHdCQUFzQixNQUFNLENBQUMsSUFBSSw4REFDRyxNQUFNLENBQUMsSUFBSSx5Q0FDekMsQ0FDSCxDQUFBO3FCQUNEO29CQUNELGFBQWEsQ0FBQyxLQUFLLENBQ2xCLGdDQUE4QixVQUFVLG9DQUErQixNQUFNLENBQUMsSUFBSSxVQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBTSxDQUMvSCxDQUFBOzs7OztDQUNEO0FBakRELHNDQWlEQyJ9