'use client';

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LanguageSwitcher() {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const handleLocaleChange = (nextLocale: string) => {
        if (nextLocale === locale) return;
        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <div className="inline-flex rounded-xl bg-slate-100 p-1 dark:bg-slate-800">
            {(["vi", "en"] as const).map((code) => (
                <button
                    key={code}
                    type="button"
                    onClick={() => handleLocaleChange(code)}
                    className={[
                        "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                        code === locale
                            ? "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white"
                            : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white",
                    ].join(" ")}
                >
                    {code.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
