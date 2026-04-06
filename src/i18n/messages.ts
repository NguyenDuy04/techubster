export const messageLoaders = {
    common: {
        en: () => import('@/messages/en/common.json'),
        vi: () => import('@/messages/vi/common.json')
    },
    navTop: {
        en: () => import('@/messages/en/navTop.json'),
        vi: () => import('@/messages/vi/navTop.json')
    },
    //Other
} as const;

export type Namespace = keyof typeof messageLoaders;
export type Locale = keyof (typeof messageLoaders)['common'];