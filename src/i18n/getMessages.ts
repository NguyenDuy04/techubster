import { messageLoaders, Namespace, Locale } from '@/i18n/messages';

export async function getMessages(
  locale: Locale,
  namespaces: Namespace[]
) {
  const results = await Promise.all(
    namespaces.map(ns =>
      messageLoaders[ns][locale]().then(m => ({
        [ns]: m.default
      }))
    )
  );

  return Object.assign({}, ...results);
}