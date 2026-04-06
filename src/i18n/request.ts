import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { hasLocale } from "next-intl";

type Messages = Record<string, Record<string, unknown>>;

export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale;

    const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale; 

    const namespaces = ['common', 'navTop'];

    const messages: Messages = {};

    for (const ns of namespaces) {
        try {
            messages[ns] = (
                await import(`@/messages/${locale}/${ns}.json`)
            ).default;
        } catch {
            messages[ns] = {};
        }
    }

    return {
        locale,
        messages,
    };
});
