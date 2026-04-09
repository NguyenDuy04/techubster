const createLoader = (namespace: string) => ({
    en: () => import(`@/messages/en/${namespace}.json`),
    vi: () => import(`@/messages/vi/${namespace}.json`),
    ja: () => import(`@/messages/ja/${namespace}.json`),
    ko: () => import(`@/messages/ko/${namespace}.json`),
    'zh-CN': () => import(`@/messages/zh-CN/${namespace}.json`),
    'zh-TW': () => import(`@/messages/zh-TW/${namespace}.json`),
});

export const arrEle = ["common", "navTop"];
export const messageLoaders = Object.fromEntries(
  arrEle.map((key) => [key, createLoader(key)])
) as Record<(typeof arrEle)[number], ReturnType<typeof createLoader>>;

export type Namespace = keyof typeof messageLoaders;
export type Locale = keyof (typeof messageLoaders)['common'];