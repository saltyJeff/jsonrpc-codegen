"use strict";
exports.__esModule = true;
var Ajv = require("ajv");
var path = require("path");
var ajv = Ajv();
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));
var docsFolder = path.join(__dirname, '../docs');
function getValidator(name) {
    return ajv.compile(require(path.join(docsFolder, name)));
}
exports.configValidator = getValidator('jsonrpc.schema.json');
exports.methodValidator = getValidator('method.schema.json');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy92YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQTBCO0FBQzFCLDJCQUE0QjtBQUM1QixJQUFNLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQTtBQUNqQixHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUE7QUFFcEUsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUE7QUFFbEQsU0FBUyxZQUFZLENBQUMsSUFBWTtJQUNqQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUN6RCxDQUFDO0FBRVksUUFBQSxlQUFlLEdBQUcsWUFBWSxDQUFDLHFCQUFxQixDQUFDLENBQUE7QUFDckQsUUFBQSxlQUFlLEdBQUcsWUFBWSxDQUFDLG9CQUFvQixDQUFDLENBQUEifQ==