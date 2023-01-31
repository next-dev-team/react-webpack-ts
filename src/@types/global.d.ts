// Manual export global type

export { }

declare global {
  const t: typeof import('i18next').default['t']
  const Icon: typeof import('../components/Icon').default;

  // ---------------------------Component-------------------------------------
  const cls: typeof import('classnames')

  type Primitive =
    | null
    | undefined
    | string
    | number
    | boolean
    | symbol
    | bigint;

  export type LiteralUnion<LiteralType, BaseType extends Primitive> =
    | LiteralType
    | (BaseType & Record<never, never>);
}