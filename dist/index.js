#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var _this = this;
exports.__esModule = true;
require('source-map-support').install();
var startTime = Date.now();
var log4js_1 = require("log4js");
var path = require("path");
var fs = require("fs-extra");
var fg = require("fast-glob");
var validators_1 = require("./validators");
var validateAndParse_1 = require("./validateAndParse");
var sortIntoEndpoints_1 = require("./sortIntoEndpoints");
var processMethod_1 = require("./processMethod");
var handlerFile_1 = require("./handlerFile");
log4js_1.getLogger().level = 'warn';
var logger = log4js_1.getLogger('jsonrpc-codegen');
var npmPackage = require('../package.json');
logger.warn('Executing JSON-RPC codegen version: ' + npmPackage.version);
var rootDir = process.argv.length <= 2 ? process.cwd() : path.resolve(process.cwd(), process.argv[2]);
logger.warn("Generating JSON-RPC definitions from: " + rootDir);
// load configuration
var configPath = path.join(rootDir, 'jsonrpc.json');
if (!fs.existsSync(configPath)) {
    logger.error("No configuration found in: " + configPath);
    process.exit(1);
}
var config = require(configPath);
if (!validators_1.configValidator(config)) {
    logger.error("Invalid configuration");
    logger.error(validators_1.configValidator.errors);
    process.exit(1);
}
if (config.abstractClass === undefined) {
    config.abstractClass = false;
}
// ensure outdir exists
fs.ensureDirSync(path.join(rootDir, config.outDir));
// get array of files
// resolve all globs to rootdir
var globs = config.include.map(function (glob) { return path.join(rootDir, glob); });
var filePromise = fg(globs, {
    dot: false
});
filePromise.then(function (files) { return __awaiter(_this, void 0, void 0, function () {
    var schemas, endpointMethods, outputDir, _loop_1, _a, _b, _c, endpoint, methods, e_1_1;
    var e_1, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0: return [4 /*yield*/, Promise.all(files.map(function (file) { return validateAndParse_1.validateAndParse(file.toString()); }))];
            case 1:
                schemas = _e.sent();
                endpointMethods = sortIntoEndpoints_1.sortIntoEndpoints(schemas);
                outputDir = path.join(rootDir, config.outDir);
                _loop_1 = function (endpoint, methods) {
                    var endpointOutputDir, interfaceFile, paramsFile, returnFile, handlerFile, validatorFile, interfaceStream, paramsStream, returnStream, handlerStream, validatorStream, interfaceHeader;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                endpointOutputDir = path.join(outputDir, endpoint);
                                return [4 /*yield*/, fs.ensureDir(endpointOutputDir)];
                            case 1:
                                _a.sent();
                                interfaceFile = path.join(endpointOutputDir, endpoint + '.ts');
                                paramsFile = path.join(endpointOutputDir, endpoint + 'Params.ts');
                                returnFile = path.join(endpointOutputDir, endpoint + 'Results.ts');
                                handlerFile = path.join(endpointOutputDir, endpoint + 'Handler.ts');
                                validatorFile = path.join(endpointOutputDir, endpoint + 'Validators.ts');
                                interfaceStream = fs.createWriteStream(interfaceFile, {
                                    flags: 'w'
                                });
                                paramsStream = fs.createWriteStream(paramsFile, {
                                    flags: 'w'
                                });
                                returnStream = fs.createWriteStream(returnFile, {
                                    flags: 'w'
                                });
                                handlerStream = fs.createWriteStream(handlerFile, {
                                    flags: 'w'
                                });
                                validatorStream = fs.createWriteStream(validatorFile, {
                                    flags: 'w'
                                });
                                interfaceStream.write("import * as paramTypes from './" + endpoint + "Params'\n");
                                interfaceStream.write("import * as resultTypes from './" + endpoint + "Results'\n");
                                interfaceHeader = config.abstractClass ? "export abstract class " + endpoint + " {\n" : "export interface " + endpoint + " {\n";
                                interfaceStream.write(interfaceHeader);
                                handlerStream.write(handlerFile_1.handlerFileTop(endpoint));
                                validatorStream.write("import * as Ajv from 'ajv'\nconst ajv = Ajv()\n");
                                return [4 /*yield*/, Promise.all(methods.map(function (method) { return processMethod_1.processMethod(method, interfaceStream, paramsStream, returnStream, handlerStream, validatorStream, config.abstractClass); }))];
                            case 2:
                                _a.sent();
                                interfaceStream.write('}');
                                handlerStream.write(handlerFile_1.handlerFileBottom(endpoint));
                                interfaceStream.end();
                                paramsStream.end();
                                returnStream.end();
                                handlerStream.end();
                                validatorStream.end();
                                return [2 /*return*/];
                        }
                    });
                };
                _e.label = 2;
            case 2:
                _e.trys.push([2, 7, 8, 9]);
                _a = __values(endpointMethods.entries()), _b = _a.next();
                _e.label = 3;
            case 3:
                if (!!_b.done) return [3 /*break*/, 6];
                _c = __read(_b.value, 2), endpoint = _c[0], methods = _c[1];
                return [5 /*yield**/, _loop_1(endpoint, methods)];
            case 4:
                _e.sent();
                _e.label = 5;
            case 5:
                _b = _a.next();
                return [3 /*break*/, 3];
            case 6: return [3 /*break*/, 9];
            case 7:
                e_1_1 = _e.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 9];
            case 8:
                try {
                    if (_b && !_b.done && (_d = _a["return"])) _d.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 9:
                logger.warn("Complete in " + (Date.now() - startTime) / 1000 + "s");
                return [2 /*return*/];
        }
    });
}); });
__export(require("./RPC"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaUJBcUdxQjs7QUFyR3JCLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO0FBQ3ZDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtBQUM1QixpQ0FBa0M7QUFDbEMsMkJBQTRCO0FBQzVCLDZCQUE4QjtBQUM5Qiw4QkFBK0I7QUFDL0IsMkNBQThDO0FBRTlDLHVEQUFzRDtBQUN0RCx5REFBd0Q7QUFDeEQsaURBQWdEO0FBQ2hELDZDQUFrRTtBQUNsRSxrQkFBUyxFQUFFLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQTtBQUMxQixJQUFNLE1BQU0sR0FBRyxrQkFBUyxDQUFDLGlCQUFpQixDQUFDLENBQUE7QUFFM0MsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsR0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDdEUsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUN2RyxNQUFNLENBQUMsSUFBSSxDQUFDLDJDQUF5QyxPQUFTLENBQUMsQ0FBQTtBQUUvRCxxQkFBcUI7QUFDckIsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsY0FB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