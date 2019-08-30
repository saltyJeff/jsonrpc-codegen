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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUlBDLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1JQQy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQUFBO1FBQ0MsWUFBTyxHQUFHLEtBQUssQ0FBQTtJQUNoQixDQUFDO0lBQUQsVUFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksa0JBQUc7QUFHaEI7SUFBbUMsOEJBQUc7SUFJckMsb0JBQVksTUFBYyxFQUFFLE1BQVM7UUFBckMsWUFDQyxpQkFBTyxTQUdQO1FBRkEsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7UUFDcEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7O0lBQ3JCLENBQUM7SUFDRixpQkFBQztBQUFELENBQUMsQUFURCxDQUFtQyxHQUFHLEdBU3JDO0FBVFksZ0NBQVU7QUFVdkI7SUFBb0MsK0JBQUc7SUFJdEMscUJBQVksTUFBYyxFQUFFLE1BQVM7UUFBckMsWUFDQyxpQkFBTyxTQUdQO1FBRkEsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7UUFDcEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7O0lBQ3JCLENBQUM7SUFDRixrQkFBQztBQUFELENBQUMsQUFURCxDQUFvQyxHQUFHLEdBU3RDO0FBVFksa0NBQVc7QUFVeEI7SUFBOEIsNEJBQUc7SUFHaEMsa0JBQVksR0FBbUIsRUFBRSxJQUFRO1FBQVIscUJBQUEsRUFBQSxRQUFRO1FBQXpDLFlBQ0MsaUJBQU8sU0FRUDtRQVBBLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUcsT0FBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFFBQVEsRUFBRTtZQUMzQixLQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQTtTQUNsQjthQUNJO1lBQ0osS0FBSSxDQUFDLE9BQU8sR0FBTSxHQUFHLENBQUMsSUFBSSxVQUFLLEdBQUcsQ0FBQyxPQUFTLENBQUE7U0FDNUM7O0lBQ0YsQ0FBQztJQUNGLGVBQUM7QUFBRCxDQUFDLEFBYkQsQ0FBOEIsR0FBRyxHQWFoQztBQWJZLDRCQUFRIn0=