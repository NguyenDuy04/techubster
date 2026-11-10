'use client'

import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";

export default function RootPage() {
    const t = useTranslations("app");
    const router = useRouter();

    useEffect(() => {
        const timeout = window.setTimeout(() => router.replace("/shop"), 200);
        return () => window.clearTimeout(timeout);
    }, [router]);

    return (
        <main
            className="flex min-h-screen items-center justify-center bg-background"
            role="status"
            aria-label={t("loading")}>
            <div className="flex items-center gap-3 text-muted-foreground">
                <Loader2 className="h-5 w-5 animate-spin text-primary" />
                <span className="text-sm font-medium">{t("loading")}</span>
            </div>
        </main>
    );
}