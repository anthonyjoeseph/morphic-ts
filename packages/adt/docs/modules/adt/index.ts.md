---
title: adt/index.ts
nav_order: 3
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [ADT (interface)](#adt-interface)
- [ADTType (type alias)](#adttype-type-alias)
- [ByTag (type alias)](#bytag-type-alias)
- [KeysDefinition (type alias)](#keysdefinition-type-alias)
- [intersectADT (function)](#intersectadt-function)
- [isIn (function)](#isin-function)
- [makeADT (function)](#makeadt-function)
- [ofType (function)](#oftype-function)
- [unionADT (function)](#unionadt-function)

---

# ADT (interface)

**Signature**

```ts
export interface ADT<A, Tag extends keyof A & string>
  extends Ma.Matchers<A, Tag>,
    PU.Predicates<A, Tag>,
    CU.Ctors<A, Tag>,
    M.MonocleFor<A> {
  select: <Keys extends (A[Tag] & string)[]>(...keys: Keys) => ADT<ExtractUnion<A, Tag, ElemType<Keys>>, Tag>
  exclude: <Keys extends (A[Tag] & string)[]>(...keys: Keys) => ADT<ExcludeUnion<A, Tag, ElemType<Keys>>, Tag>
  tag: Tag
  keys: KeysDefinition<A, Tag>
}
```

Added in v0.0.1

# ADTType (type alias)

**Signature**

```ts
export type ADTType<A extends ADT<any, any>> = CU.CtorType<A>
```

Added in v0.0.1

# ByTag (type alias)

**Signature**

```ts
export type ByTag<A> = <Tag extends TagsOf<A> & string>(t: Tag) => (keys: KeysDefinition<A, Tag>) => ADT<A, Tag>
```

Added in v0.0.1

# KeysDefinition (type alias)

**Signature**

```ts
export type KeysDefinition<A, Tag extends keyof A & string> = { [k in A[Tag] & string]: any }
```

Added in v0.0.1

# intersectADT (function)

**Signature**

```ts
export const intersectADT = <A, B, Tag extends (keyof A & keyof B) & string>(
  a: ADT<A, Tag>,
  b: ADT<B, Tag>
): ADT<Extract<A, B>, Tag> => ...
```

Added in v0.0.1

# isIn (function)

**Signature**

```ts
export const isIn = <A, Tag extends keyof A & string>(keys: KeysDefinition<A, Tag>) => (k: string) => ...
```

Added in v0.0.1

# makeADT (function)

**Signature**

```ts
export const makeADT = <Tag extends string>(tag: Tag) => <R extends { [x in keyof R]: TypeDef<{ [t in Tag]: x }> }>(
  _keys: R
): ADT<TypeOfDef<R[keyof R]>, Tag> => ...
```

Added in v0.0.1

# ofType (function)

**Signature**

```ts
export const ofType = <T>(): TypeDef<T> => ...
```

Added in v0.0.1

# unionADT (function)

**Signature**

```ts
export const unionADT = <AS extends [ADT<any, any>, ADT<any, any>, ...Array<ADT<any, any>>]>(
  as: AS
): ADT<ADTType<AS[number]>, AS[number]['tag']> => ...
```

Added in v0.0.1