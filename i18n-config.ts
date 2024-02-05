export const i18n = {
    defaultLocale: 'el',
    locales: ['en', 'el'],
  } as const
  
  export type Locale = (typeof i18n)['locales'][number]