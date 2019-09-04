"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydEludG9FbmRwb2ludHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc29ydEludG9FbmRwb2ludHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUEsU0FBZ0IsaUJBQWlCLENBQUMsT0FBaUI7O0lBQ2xELElBQU0sR0FBRyxHQUFHLElBQUksR0FBRyxFQUFvQixDQUFBOztRQUN2QyxLQUFrQixJQUFBLFlBQUEsU0FBQSxPQUFPLENBQUEsZ0NBQUEscURBQUU7WUFBdkIsSUFBSSxNQUFNLG9CQUFBO1lBQ2IsSUFBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUNqQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO2FBQ3RDO2lCQUNJO2dCQUNKLElBQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFBO2dCQUM5QyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2FBQ3RCO1NBQ0Q7Ozs7Ozs7OztJQUNELE9BQU8sR0FBRyxDQUFBO0FBQ1gsQ0FBQztBQVpELDhDQVlDIn0=