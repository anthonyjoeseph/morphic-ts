import { Eq } from 'fp-ts/lib/Eq'
import { modelEqInterpreter } from '@morphic-ts/eq-interpreters/lib/interpreters'

import { Show } from 'fp-ts/lib/Show'
import { modelShowInterpreter } from '@morphic-ts/show-interpreters/lib/interpreters'

import { Arbitrary } from 'fast-check/*'
import { modelFastCheckInterpreter } from '@morphic-ts/fastcheck-interpreters/lib/interpreters'

import { Type } from 'io-ts'

import { JSONSchema } from '@morphic-ts/json-schema-interpreters/lib/json-schema/json-schema'
import { modelJsonSchemaInterpreter } from '@morphic-ts/json-schema-interpreters/lib/interpreters'

import { ProgramNoUnionURI } from './program-no-union'

import * as E from 'fp-ts/lib/Either'
import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray'
import { NamedSchemas } from '@morphic-ts/json-schema-interpreters/lib/index'
import { pipe } from 'fp-ts/lib/pipeable'
import { JsonSchemaError } from '@morphic-ts/json-schema-interpreters/lib/json-schema/json-schema-ctors'
import { identity } from 'fp-ts/lib/function'
import { resolveSchema } from '@morphic-ts/json-schema-interpreters/lib/utils'
import { modelIoTsNonStrictInterpreter } from '@morphic-ts/io-ts-interpreters/lib/interpreters'
import { ProgramInterpreter, Materialized } from './usage/materializer'
import { interpretable } from './usage/programs-infer'
import { ProgramType } from './usage/ProgramType'
import { Summoners } from './usage/summoner'

/**
 *  @since 0.0.1
 */
export const ESBASTJInterpreterURI = 'ESBASTJInterpreterURI' as const
/**
 *  @since 0.0.1
 */
export type ESBASTJInterpreterURI = typeof ESBASTJInterpreterURI

interface ESBASTJInterpreter<E, A> {
  build: (a: A) => A
  eq: Eq<A>
  show: Show<A>
  arb: Arbitrary<A>
  strictType: Type<A, E, unknown>
  type: Type<A, E, unknown>
  jsonSchema: E.Either<NonEmptyArray<JsonSchemaError>, [JSONSchema, NamedSchemas]>
}

declare module './usage/InterpreterResult' {
  interface InterpreterResult<E, A> {
    [ESBASTJInterpreterURI]: ESBASTJInterpreter<E, A>
  }
}
