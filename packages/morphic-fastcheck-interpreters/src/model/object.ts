import { FastCheckType, FastCheckURI } from '..'
import { ModelAlgebraObject1, PropsKind1 } from '@sledorze/morphic-model-algebras/lib/object'
import { projectField } from '@sledorze/morphic-common/lib/utils'
import { RecordConstraints, record } from 'fast-check'

export const fastCheckObjectInterpreter: ModelAlgebraObject1<FastCheckURI> = {
  _F: FastCheckURI,
  partial: <Props>(props: PropsKind1<FastCheckURI, Props>) =>
    new FastCheckType(
      record<Props, RecordConstraints>(projectField(props)('arb'), {
        withDeletedKeys: true
      })
    ),
  interface: <Props>(props: PropsKind1<FastCheckURI, Props>) =>
    new FastCheckType(record<Props>(projectField(props)('arb')))
}
