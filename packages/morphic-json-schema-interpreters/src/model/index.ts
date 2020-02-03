import { merge } from '@sledorze/morphic-common/lib/utils'
import { jsonSchemaPrimitiveInterpreter } from './primitives'
import { jsonSchemaIntersectionInterpreter } from './intersections'
import { jsonSchemaObjectInterpreter } from './object'
import { jsonSchemaTaggedUnionInterpreter } from './tagged-unions'
import { jsonSchemaRecursiveInterpreter } from './recursive'
import { jsonSchemaStrMapInterpreter } from './str-map'
import { jsonSchemaSetInterpreter } from './set'
import { jsonSchemaUnionInterpreter } from './unions'
import { jsonSchemaUnknownInterpreter } from './unknown'
import { jsonSchemaNewtypeInterpreter } from './newtype'
import { jsonSchemaRefinedInterpreter } from './refined'

export const allModelJsonSchema = merge(
  jsonSchemaRefinedInterpreter,
  jsonSchemaNewtypeInterpreter,
  jsonSchemaUnknownInterpreter,
  jsonSchemaPrimitiveInterpreter,
  jsonSchemaIntersectionInterpreter,
  jsonSchemaObjectInterpreter,
  jsonSchemaTaggedUnionInterpreter,
  jsonSchemaRecursiveInterpreter,
  jsonSchemaStrMapInterpreter,
  jsonSchemaSetInterpreter,
  jsonSchemaUnionInterpreter
)
