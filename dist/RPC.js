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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUlBDLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1JQQy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQUFBO1FBQ0MsWUFBTyxHQUFHLEtBQUssQ0FBQTtJQUNoQixDQUFDO0lBQUQsVUFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksa0JBQUc7QUFHaEI7SUFBbUMsOEJBQUc7SUFJckMsb0JBQVksTUFBYyxFQUFFLE1BQVM7UUFBckMsWUFDQyxpQkFBTyxTQUdQO1FBRkEsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7UUFDcEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7O0lBQ3JCLENBQUM7SUFDRixpQkFBQztBQUFELENBQUMsQUFURCxDQUFtQyxHQUFHLEdBU3JDO0FBVFksZ0NBQVU7QUFVdkI7SUFBaUMsK0JBQUc7SUFFbkMscUJBQVksRUFBMkI7UUFBdkMsWUFDQyxpQkFBTyxTQUVQO1FBREEsS0FBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUE7O0lBQ2IsQ0FBQztJQUNGLGtCQUFDO0FBQUQsQ0FBQyxBQU5ELENBQWlDLEdBQUcsR0FNbkM7QUFOWSxrQ0FBVztBQU94QjtJQUFtQyw4QkFBVztJQUU3QyxvQkFBWSxNQUFTLEVBQUUsRUFBb0I7UUFBM0MsWUFDQyxrQkFBTSxFQUFFLENBQUMsU0FFVDtRQURBLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBOztJQUNyQixDQUFDO0lBQ0YsaUJBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBbUMsV0FBVyxHQU03QztBQU5ZLGdDQUFVO0FBT3ZCO0lBQThCLDRCQUFXO0lBS3hDLGtCQUFZLEdBQW1CLEVBQUUsSUFBUSxFQUFFLEVBQVE7UUFBbEIscUJBQUEsRUFBQSxRQUFRO1FBQXpDLFlBQ0Msa0JBQU0sSUFBSSxDQUFDLFNBS1g7UUFKQSxLQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1osT0FBTyxFQUFFLE9BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUksR0FBRyxDQUFDLElBQUksVUFBSyxHQUFHLENBQUMsT0FBUztZQUN0RSxJQUFJLEVBQUUsSUFBSTtTQUNWLENBQUE7O0lBQ0YsQ0FBQztJQUNGLGVBQUM7QUFBRCxDQUFDLEFBWkQsQ0FBOEIsV0FBVyxHQVl4QztBQVpZLDRCQUFRIn0=