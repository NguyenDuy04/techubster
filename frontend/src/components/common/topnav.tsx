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
        <div className='hidden lg:flex lg:justify-center border-b border-slate-200 bg-topnav text-slate-600'>
            <div className='flex min-h-10 w-full max-w-7xl items-center justify-between gap-4'>
                <div className='flex items-center gap-5 text-sm h-full'>
                    <Link href="/store-location" className="relative flex items-center h-full gap-1 whitespace-nowrap before:absolute before:content-[''] before:block before:w-px before:h-5.25 before:top-[50%] before:translate-y-[-50%] before:-right-2.5 before:bg-border-navtop">
                        <MapPinned aria-hidden='true' className='h-4.5 w-4.5 text-slate-400' />
                        <span>{t('storeLocation')}</span>
                    </Link>
                    <div className="relative flex items-center cursor-pointer h-full gap-1 whitespace-nowrap before:absolute before:content-[''] before:block before:w-px before:h-5.25 before:top-[50%] before:translate-y-[-50%] before:-right-2.5 before:bg-border-navtop">
                        <CloudDownload aria-hidden='true' className='h-4.5 w-4.5 text-slate-400' />
                        <span className='select-none'>{t('downloadApp')}</span>
                    </div>
                    <div className="flex items-center h-full gap-2 whitespace-nowrap">
                        <span className='cursor-default select-none'>{t('connect')}</span>
                        <Link href="https://www.facebook.com/">
                            <FacebookIcon aria-hidden='true' className='h-5 w-5' />
                        </Link>
                        <Link href="https://www.instagram.com/">
                            <InstagramIcon aria-hidden='true' className='h-4.5 w-4.5' />
                        </Link>
                    </div>
                </div>

                <div className='flex items-center h-full gap-5'>
                    <div className="relative flex items-center h-full gap-2 rounded-lg before:absolute before:content-[''] before:block before:w-px before:h-5.25 before:top-[50%] before:translate-y-[-50%] before:-right-2.5 xl:before:-right-1.5 before:bg-border-navtop">
                        <LanguageSwitch />
                        <span aria-hidden='true' className='h-5 w-px rotate-15 bg-border-navtop' />
                        <CurrencySwitch />
                    </div>
                    <div className='flex items-center h-full gap-5 text-sm font-medium'>
                        <Link href="/track-order" className="relative flex items-center h-full gap-1 whitespace-nowrap before:absolute before:content-[''] before:block before:w-px before:h-5.25 before:top-[50%] before:translate-y-[-50%] before:-right-2.5 before:bg-border-navtop">
                            <Truck aria-hidden='true' className='h-4.5 w-4.5 text-slate-400' />
                            <span className=''>{t('trackOrder')}</span>
                        </Link>
                        <Link href="/help" className='flex items-center h-full gap-1 whitespace-nowrap'>
                            <CircleQuestionMark aria-hidden='true' className='h-4.5 w-4.5 text-slate-400' />
                            <span className=''>{t('help')}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};