import * as paramTypes from './EchoParams'
import * as resultTypes from './EchoResults'
export interface Echo {
	echo(params: paramTypes.EchoParams): Promise<resultTypes.EchoResult>
}