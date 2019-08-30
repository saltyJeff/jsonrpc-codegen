"use strict";
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
exports.__esModule = true;
function sortIntoEndpoints(methods) {
    var e_1, _a;
    var map = new Map();
    try {
        for (var methods_1 = __values(methods), methods_1_1 = methods_1.next(); !methods_1_1.done; methods_1_1 = methods_1.next()) {
            var method = methods_1_1.value;
            if (!map.has(method.endpointName)) {
                map.set(method.endpointName, [method]);
            }
            else {
                var methodArr = map.get(method.endpointName);
                methodArr.push(method);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (methods_1_1 && !methods_1_1.done && (_a = methods_1["return"])) _a.call(methods_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return map;
}
exports.sortIntoEndpoints = sortIntoEndpoints;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydEludG9FbmRwb2ludHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc29ydEludG9FbmRwb2ludHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBLFNBQWdCLGlCQUFpQixDQUFDLE9BQWlCOztJQUNsRCxJQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBb0IsQ0FBQTs7UUFDdkMsS0FBa0IsSUFBQSxZQUFBLFNBQUEsT0FBTyxDQUFBLGdDQUFBLHFEQUFFO1lBQXZCLElBQUksTUFBTSxvQkFBQTtZQUNiLElBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDakMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTthQUN0QztpQkFDSTtnQkFDSixJQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQTtnQkFDOUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTthQUN0QjtTQUNEOzs7Ozs7Ozs7SUFDRCxPQUFPLEdBQUcsQ0FBQTtBQUNYLENBQUM7QUFaRCw4Q0FZQyJ9