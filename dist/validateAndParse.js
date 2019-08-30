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
var validators_1 = require("./validators");
var log4js_1 = require("log4js");
var changeCase_1 = require("./changeCase");
var logger = log4js_1.getLogger('Schema parser');
function validateAndParse(file) {
    return __awaiter(this, void 0, void 0, function () {
        var method, errStr, parentDir, filename;
        return __generator(this, function (_a) {
            method = require(file);
            if (!validators_1.methodValidator(method)) {
                errStr = "Method " + file + " is invalid\n" + validators_1.methodValidator.errors.toString();
                logger.error(errStr);
                throw Error(errStr);
            }
            if (!method.endpointName) {
                parentDir = path.basename(path.dirname(file));
                method.endpointName = changeCase_1.toPascalCase(parentDir);
            }
            if (!method.name) {
                filename = path.basename(file);
                filename = filename.substring(0, filename.indexOf('.'));
                method.name = changeCase_1.toCamelCase(filename);
            }
            if (!!method.params) {
                method.params.type = 'object';
            }
            if (!!method.result) {
                method.result.type = 'object';
            }
            method.filePath = file;
            return [2 /*return*/, method];
        });
    });
}
exports.validateAndParse = validateAndParse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVBbmRQYXJzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy92YWxpZGF0ZUFuZFBhcnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMkJBQTRCO0FBQzVCLDJDQUErQztBQUMvQyxpQ0FBa0M7QUFDbEMsMkNBQXlEO0FBRXpELElBQU0sTUFBTSxHQUFHLGtCQUFTLENBQUMsZUFBZSxDQUFDLENBQUE7QUFFekMsU0FBc0IsZ0JBQWdCLENBQUMsSUFBWTs7OztZQUM1QyxNQUFNLEdBQVcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3BDLElBQUcsQ0FBQyw0QkFBZSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN0QixNQUFNLEdBQUcsWUFBVSxJQUFJLHFCQUFnQiw0QkFBZSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUksQ0FBQTtnQkFDaEYsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDcEIsTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7YUFDbkI7WUFDRCxJQUFHLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtnQkFDbEIsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO2dCQUNuRCxNQUFNLENBQUMsWUFBWSxHQUFHLHlCQUFZLENBQUMsU0FBUyxDQUFDLENBQUE7YUFDN0M7WUFDRCxJQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDWixRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDbEMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtnQkFDdkQsTUFBTSxDQUFDLElBQUksR0FBRyx3QkFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFBO2FBQ25DO1lBQ0QsSUFBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDbkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFBO2FBQzdCO1lBQ0QsSUFBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDbkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFBO2FBQzdCO1lBQ0QsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7WUFDdEIsc0JBQU8sTUFBTSxFQUFBOzs7Q0FDYjtBQXhCRCw0Q0F3QkMifQ==