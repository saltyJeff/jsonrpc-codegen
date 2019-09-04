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
    function RPCRequest(method, params, id) {
        var _this = _super.call(this) || this;
        _this.method = method;
        _this.params = params;
        _this.id = id;
        return _this;
    }
    return RPCRequest;
}(RPC));
exports.RPCRequest = RPCRequest;
var RPCResponse = /** @class */ (function (_super) {
    __extends(RPCResponse, _super);
    function RPCResponse(id) {
        var _this = _super.call(this) || this;
        _this.id = id;
        return _this;
    }
    return RPCResponse;
}(RPC));
exports.RPCResponse = RPCResponse;
var RPCSuccess = /** @class */ (function (_super) {
    __extends(RPCSuccess, _super);
    function RPCSuccess(result, id) {
        var _this = _super.call(this, id) || this;
        _this.result = result;
        return _this;
    }
    return RPCSuccess;
}(RPCResponse));
exports.RPCSuccess = RPCSuccess;
var RPCError = /** @class */ (function (_super) {
    __extends(RPCError, _super);
    function RPCError(err, code, id) {
        if (code === void 0) { code = 1; }
        var _this = _super.call(this, null) || this;
        _this.error = {
            message: typeof (err) == 'string' ? err : err.name + ": " + err.message,
            code: code
        };
        return _this;
    }
    return RPCError;
}(RPCResponse));
exports.RPCError = RPCError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUlBDLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1JQQy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQUFBO1FBQ0MsWUFBTyxHQUFHLEtBQUssQ0FBQTtJQUNoQixDQUFDO0lBQUQsVUFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksa0JBQUc7QUFHaEI7SUFBbUMsOEJBQUc7SUFJckMsb0JBQVksTUFBYyxFQUFFLE1BQVMsRUFBRSxFQUFvQjtRQUEzRCxZQUNDLGlCQUFPLFNBSVA7UUFIQSxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtRQUNwQixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtRQUNwQixLQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQTs7SUFDYixDQUFDO0lBQ0YsaUJBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBbUMsR0FBRyxHQVVyQztBQVZZLGdDQUFVO0FBV3ZCO0lBQWlDLCtCQUFHO0lBRW5DLHFCQUFZLEVBQTJCO1FBQXZDLFlBQ0MsaUJBQU8sU0FFUDtRQURBLEtBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFBOztJQUNiLENBQUM7SUFDRixrQkFBQztBQUFELENBQUMsQUFORCxDQUFpQyxHQUFHLEdBTW5DO0FBTlksa0NBQVc7QUFPeEI7SUFBbUMsOEJBQVc7SUFFN0Msb0JBQVksTUFBUyxFQUFFLEVBQW9CO1FBQTNDLFlBQ0Msa0JBQU0sRUFBRSxDQUFDLFNBRVQ7UUFEQSxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTs7SUFDckIsQ0FBQztJQUNGLGlCQUFDO0FBQUQsQ0FBQyxBQU5ELENBQW1DLFdBQVcsR0FNN0M7QUFOWSxnQ0FBVTtBQU92QjtJQUE4Qiw0QkFBVztJQUt4QyxrQkFBWSxHQUFtQixFQUFFLElBQVEsRUFBRSxFQUFRO1FBQWxCLHFCQUFBLEVBQUEsUUFBUTtRQUF6QyxZQUNDLGtCQUFNLElBQUksQ0FBQyxTQUtYO1FBSkEsS0FBSSxDQUFDLEtBQUssR0FBRztZQUNaLE9BQU8sRUFBRSxPQUFNLENBQUMsR0FBRyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFJLEdBQUcsQ0FBQyxJQUFJLFVBQUssR0FBRyxDQUFDLE9BQVM7WUFDdEUsSUFBSSxFQUFFLElBQUk7U0FDVixDQUFBOztJQUNGLENBQUM7SUFDRixlQUFDO0FBQUQsQ0FBQyxBQVpELENBQThCLFdBQVcsR0FZeEM7QUFaWSw0QkFBUSJ9