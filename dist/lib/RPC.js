"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var RPC = /** @class */ (function () {
    function RPC() {
        this.jsonrpc = '2.0';
    }
    return RPC;
}());
exports.RPC = RPC;
var RPCRequest = /** @class */ (function (_super) {
    __extends(RPCRequest, _super);
    function RPCRequest(method, params) {
        var _this = _super.call(this) || this;
        _this.method = method;
        _this.params = params;
        return _this;
    }
    return RPCRequest;
}(RPC));
exports.RPCRequest = RPCRequest;
var RPCResponse = /** @class */ (function (_super) {
    __extends(RPCResponse, _super);
    function RPCResponse(method, result) {
        var _this = _super.call(this) || this;
        _this.method = method;
        _this.result = result;
        return _this;
    }
    return RPCResponse;
}(RPC));
exports.RPCResponse = RPCResponse;
var RPCError = /** @class */ (function (_super) {
    __extends(RPCError, _super);
    function RPCError(err, code) {
        if (code === void 0) { code = 1; }
        var _this = _super.call(this) || this;
        _this.code = code;
        if (typeof (err) == 'string') {
            _this.message = err;
        }
        else {
            _this.message = err.name + ": " + err.message;
        }
        return _this;
    }
    return RPCError;
}(RPC));
exports.RPCError = RPCError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUlBDLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi9SUEMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtRQUNDLFlBQU8sR0FBRyxLQUFLLENBQUE7SUFDaEIsQ0FBQztJQUFELFVBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLGtCQUFHO0FBR2hCO0lBQW1DLDhCQUFHO0lBSXJDLG9CQUFZLE1BQWMsRUFBRSxNQUFTO1FBQXJDLFlBQ0MsaUJBQU8sU0FHUDtRQUZBLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1FBQ3BCLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBOztJQUNyQixDQUFDO0lBQ0YsaUJBQUM7QUFBRCxDQUFDLEFBVEQsQ0FBbUMsR0FBRyxHQVNyQztBQVRZLGdDQUFVO0FBVXZCO0lBQW9DLCtCQUFHO0lBSXRDLHFCQUFZLE1BQWMsRUFBRSxNQUFTO1FBQXJDLFlBQ0MsaUJBQU8sU0FHUDtRQUZBLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1FBQ3BCLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBOztJQUNyQixDQUFDO0lBQ0Ysa0JBQUM7QUFBRCxDQUFDLEFBVEQsQ0FBb0MsR0FBRyxHQVN0QztBQVRZLGtDQUFXO0FBVXhCO0lBQThCLDRCQUFHO0lBR2hDLGtCQUFZLEdBQW1CLEVBQUUsSUFBUTtRQUFSLHFCQUFBLEVBQUEsUUFBUTtRQUF6QyxZQUNDLGlCQUFPLFNBUVA7UUFQQSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFHLE9BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxRQUFRLEVBQUU7WUFDM0IsS0FBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUE7U0FDbEI7YUFDSTtZQUNKLEtBQUksQ0FBQyxPQUFPLEdBQU0sR0FBRyxDQUFDLElBQUksVUFBSyxHQUFHLENBQUMsT0FBUyxDQUFBO1NBQzVDOztJQUNGLENBQUM7SUFDRixlQUFDO0FBQUQsQ0FBQyxBQWJELENBQThCLEdBQUcsR0FhaEM7QUFiWSw0QkFBUSJ9