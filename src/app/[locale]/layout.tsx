import { getMessages } from '@/i18n/getMessages';
import { routing } from '@/i18n/routing';
import { AppProvider } from '@/providers/provider';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';

interface LocaleLayoutProps {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
    children,
    params
}: LocaleLayoutProps) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    const messages = await getMessages(locale, [
        'common',
        'navTop',
    ]);

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <AppProvider>
                {children}
            </AppProvider>
        </NextIntlClientProvider>
    );
}