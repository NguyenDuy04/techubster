'use client';

import { useLocale } from 'next-intl';
import { OptionSwitch } from '@/components/common/option-switch';

const languageOptions = [
    {
        value: 'en',
        label: 'English',
        icon: <span className='fi fi-us' role='img' aria-label='United States' />,
    },
    {
        value: 'vi',
        label: 'Tiếng Việt',
        icon: <span className='fi fi-vn' role='img' aria-label='Vietnam' />,
    },
];

export const LanguageSwitch = () => {
    const locale = useLocale();

    return (
        <OptionSwitch
            ariaLabel='Language'
            initialValue={locale}
            options={languageOptions}
            value={locale}
            onValueChange={(nextLocale) => {
                const nextUrl = new URL(window.location.href);
                const pathSegments = nextUrl.pathname.split('/');
                pathSegments[1] = nextLocale;
                nextUrl.pathname = pathSegments.join('/');
                window.location.assign(nextUrl);
            }}
        />
    );
};
