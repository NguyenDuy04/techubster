import { MapPinned, CloudDownload, Truck, CircleQuestionMark } from 'lucide-react';
import { CurrencySwitch } from '@/components/common/currency-switch';
import { LanguageSwitch } from '@/components/common/language-switch';
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export const TopNavSection = () => {
    const t = useTranslations('TopNav');

    return (
        <div className='hidden lg:flex border-b border-slate-200 bg-topnav text-slate-600 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-300'>
            <div className='mx-auto flex min-h-10 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center gap-5 text-sm h-full'>
                    <Link href="/" className='flex items-center h-full gap-1 whitespace-nowrap'>
                        <MapPinned aria-hidden='true' className='h-4 w-4 text-slate-400' />
                        <span>{t('storeLocation')}</span>
                    </Link>
                    <div className='flex items-center h-full gap-1 whitespace-nowrap'>
                        <CloudDownload aria-hidden='true' className='h-4 w-4 text-slate-400' />
                        <span>{t('downloadApp')}</span>
                    </div>
                    <div className='flex items-center h-full gap-2 whitespace-nowrap'>
                        <span className=''>{t('connect')}</span>
                        <FacebookIcon aria-hidden='true' className='h-4 w-4' />
                        <InstagramIcon aria-hidden='true' className='h-4 w-4' />
                    </div>
                </div>

                <div className='ml-auto flex items-center gap-2 sm:gap-4 lg:gap-6'>
                    <div className='flex items-center gap-1 rounded-lg sm:gap-2'>
                        <LanguageSwitch />
                        <CurrencySwitch />
                    </div>
                    <div className='flex items-center gap-3 border-l border-slate-200 pl-3 text-sm font-medium dark:border-slate-800 sm:gap-5 sm:pl-4'>
                        <div className='flex items-center gap-1.5 whitespace-nowrap'>
                            <Truck aria-hidden='true' className='h-4 w-4 text-slate-400' />
                            <span className='sr-only sm:not-sr-only'>{t('trackOrder')}</span>
                        </div>
                        <div className='flex items-center gap-1.5 whitespace-nowrap'>
                            <CircleQuestionMark aria-hidden='true' className='h-4 w-4 text-slate-400' />
                            <span className='sr-only sm:not-sr-only'>{t('help')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};