export function toPascalCase(str: string) {
	return `${str}`
	  .replace(new RegExp(/[-_]+/, 'g'), ' ')
	  .replace(new RegExp(/[^\w\s]/, 'g'), '')
	  .replace(
		new RegExp(/\s+(.)(\w+)/, 'g'),
		($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
	  )
	  .replace(new RegExp(/\s/, 'g'), '')
	  .replace(new RegExp(/\w/), s => s.toUpperCase());
}
// from https://stackoverflow.com/questions/4068573/convert-string-to-pascal-case-aka-uppercamelcase-in-javascript

export function toCamelCase(str: string) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index == 0 ? match.toLowerCase() : match.toUpperCase();
  });
}
// from https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case