import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    // Danh sách này sau này sẽ fetch từ CMS (100+ locales)
    locales: ['vi', 'en'],
    defaultLocale: 'vi',
    // Luôn hiển thị locale trên URL để Proxy/CDN cache chính xác từng bản ghi
    localePrefix: 'always'
})