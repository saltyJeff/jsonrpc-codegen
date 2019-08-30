"use strict";
exports.__esModule = true;
function toPascalCase(str) {
    return ("" + str)
        .replace(new RegExp(/[-_]+/, 'g'), ' ')
        .replace(new RegExp(/[^\w\s]/, 'g'), '')
        .replace(new RegExp(/\s+(.)(\w+)/, 'g'), function ($1, $2, $3) { return "" + ($2.toUpperCase() + $3.toLowerCase()); })
        .replace(new RegExp(/\s/, 'g'), '')
        .replace(new RegExp(/\w/), function (s) { return s.toUpperCase(); });
}
exports.toPascalCase = toPascalCase;
// from https://stackoverflow.com/questions/4068573/convert-string-to-pascal-case-aka-uppercamelcase-in-javascript
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9QYXNjYWxDYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3RvUGFzY2FsQ2FzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFNBQWdCLFlBQVksQ0FBQyxHQUFXO0lBQ3ZDLE9BQU8sQ0FBQSxLQUFHLEdBQUssQ0FBQTtTQUNaLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDO1NBQ3RDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDO1NBQ3ZDLE9BQU8sQ0FDVCxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLEVBQzlCLFVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUssT0FBQSxNQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUUsRUFBeEMsQ0FBd0MsQ0FDdEQ7U0FDQSxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztTQUNsQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQVZELG9DQVVDO0FBQ0Qsa0hBQWtIIn0=