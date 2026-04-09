export const locales = [
    "vi",
    "en",
    "zh-CN",
    "zh-TW",
    "ja",
    "ko"
] as const;

export type Locale = (typeof locales)[number];

export const languages: {
    code: Locale;
    name: string;
    flag: string;
}[] = [
    { code: "vi", name: "Tiếng Việt", flag: "VN" },
    { code: "en", name: "English", flag: "US" },
    { code: "zh-CN", name: "中文 (简体)", flag: "CN" },
    { code: "zh-TW", name: "中文 (繁體)", flag: "TW" },
    { code: "ja", name: "日本語", flag: "JP" },
    { code: "ko", name: "한국어", flag: "KR" },
];