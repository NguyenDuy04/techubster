import { defineRouting } from "next-intl/routing";
import { locales } from "../../config/i18n";

export const routing = defineRouting({
    locales: locales,
    defaultLocale: 'vi',
    localePrefix: 'always'
})