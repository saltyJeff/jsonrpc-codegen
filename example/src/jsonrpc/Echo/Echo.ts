import * as paramTypes from './EchoParams'
import * as resultTypes from './EchoResults'
export abstract class Echo {
	abstract async echo(params: paramTypes.EchoParams): Promise<resultTypes.EchoResult>
}