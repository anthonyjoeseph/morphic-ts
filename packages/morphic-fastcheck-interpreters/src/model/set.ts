import { set } from 'fast-check'
import { FastCheckType, FastCheckURI } from '..'
import { fromArray } from 'fp-ts/lib/Set'
import { ModelAlgebraSet1 } from '@sledorze/morphic-model-algebras/lib/set'

export const fastCheckSetInterpreter: ModelAlgebraSet1<FastCheckURI> = {
  _F: FastCheckURI,
  set: (a, ord) => new FastCheckType(set(a.arb).map(fromArray(ord)))
}
