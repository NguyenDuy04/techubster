import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import { hasLocale } from "next-intl";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/provider/theme-provider";
import { Providers } from "@/components/layout/providers";
import { PageTransition } from "@/components/layout/page-transition";

const inter = Inter({
    subsets: ["latin", "latin-ext"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Techubster",
    description: "",
};

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale} className={cn("h-full antialiased")} suppressHydrationWarning>
            <body className={cn('h-full', inter.className, inter.variable)}>
                <ThemeProvider>
                    <NextIntlClientProvider messages={messages}>
                        <Providers>
                            <PageTransition>
                                {children}
                            </PageTransition>
                        </Providers>
                    </NextIntlClientProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}