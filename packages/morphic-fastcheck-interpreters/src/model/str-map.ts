import { FastCheckType, FastCheckURI } from '..'
import { ModelAlgebraStrMap1 } from '@sledorze/morphic-model-algebras/lib/str-map'
import { array, record, semigroup } from 'fp-ts'
import { tuple, array as FCArray, string } from 'fast-check'

const strmapFromArray = <A>() => record.fromFoldable(semigroup.getFirstSemigroup<A>(), array.array)
export const fastCheckStrMapInterpreter: ModelAlgebraStrMap1<FastCheckURI> = {
  _F: FastCheckURI,
  strMap: codomain => new FastCheckType(FCArray(tuple(string(), codomain.arb)).map(strmapFromArray()))
}
