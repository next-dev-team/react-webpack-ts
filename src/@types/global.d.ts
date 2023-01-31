
// Manual export global type

export {};

declare global {

  const t: typeof import('i18next').default['t'];

  // ---------------------------Component-------------------------------------
  const cls: typeof import('classnames');
}

