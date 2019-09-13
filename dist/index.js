#!/usr/bin/env node
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
filePromise.then(function (files) { return __awaiter(void 0, void 0, void 0, function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7QUFDdkMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFBO0FBQzVCLGlDQUFrQztBQUNsQywyQkFBNEI7QUFDNUIsNkJBQThCO0FBQzlCLDhCQUErQjtBQUMvQiwyQ0FBOEM7QUFFOUMsdURBQXNEO0FBQ3RELHlEQUF3RDtBQUN4RCxpREFBZ0Q7QUFDaEQsNkNBQWtFO0FBQ2xFLGtCQUFTLEVBQUUsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFBO0FBQzFCLElBQU0sTUFBTSxHQUFHLGtCQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtBQUUzQyxJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtBQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxHQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUN0RSxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ3ZHLE1BQU0sQ0FBQyxJQUFJLENBQUMsMkNBQXlDLE9BQVMsQ0FBQyxDQUFBO0FBRS9ELHFCQUFxQjtBQUNyQixJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQTtBQUNy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