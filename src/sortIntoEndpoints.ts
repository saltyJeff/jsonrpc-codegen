import { Method } from "./Method";

export function sortIntoEndpoints(methods: Method[]): Map<string, Method[]> {
	const map = new Map<string, Method[]>()
	for(let method of methods) {
		if(!map.has(method.endpointName)) {
			map.set(method.endpointName, [method])
		}
		else {
			const methodArr = map.get(method.endpointName)
			methodArr.push(method)
		}
	}
	return map
}