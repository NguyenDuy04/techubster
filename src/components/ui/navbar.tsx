
"use client"

import { Icons } from '@/components/icons';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from "next/navigation";
import Image from 'next/image'
import { useState } from 'react';
import qrDownload from "../../../public/images/downloadapp/qr_download.png";
import appstoreLink from "../../../public/images/downloadapp/appstore_download.png";
import playstoreLink from "../../../public/images/downloadapp/play_download.png";
import { motion, AnimatePresence } from 'framer-motion';
import { languages, locales } from '../../../config/i18n';

export const Navbar = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const tCommon = useTranslations("common");
    const [isHoveredQrcode, setIsHoveredQrcode] = useState(false);
    const [isHoveredLanguage, setIsHoveredLanguage] = useState(false);
    const currentLang = languages.find(l => l.code === locale);

    const handleChangeLang = (code: string) => {
        const regex = new RegExp(`^/(${locales.join("|")})`);
        const newPath = pathname.replace(regex, "");

        router.replace(`/${code}${newPath}`);
    };

    return (
        <div className='hidden lg:block lg:px-4 border-b border-b-[#ccc] bg-(--navtop-bg)'>
            <div className='flex justify-between items-center h-9 max-w-360 mx-auto'>
                <div className='flex items-center gap-5 h-full'>
                    <div className='group relative before:content-[""] before:absolute before:-right-2.5 before:top-1/2 before:-translate-y-1/2 before:w-px before:h-5.5 before:bg-gray-300 flex items-center gap-0.5 cursor-pointer select-none h-full'>
                        <Icons.MapIcon className='w-5.5 h-5.5 block text-(--primary-text-icon)' />
                        <span className='text-[15px] text-(--primary-text) transition-all duration-200 ease-in-out hover:text-(--primary-text-hover)'>
                            {tCommon("navtop.storelocator")}
                        </span>
                    </div>
                    <div
                        className='relative before:content-[""] cursor-pointer before:absolute before:-right-2.5 before:w-px before:h-5.5 before:bg-gray-300 before:top-1/2 before:-translate-y-1/2 h-full group before:select-none before:pointer-events-none'
                        onMouseEnter={() => setIsHoveredQrcode(true)}
                        onMouseLeave={() => setIsHoveredQrcode(false)}>
                        <div className='flex items-center gap-0.5 cursor-pointer select-none h-full'>
                            <Icons.DownloadIcon className='w-5 h-5 block text-(--primary-text-icon)' />
                            <span className='text-[15px] text-(--primary-text) transition-all duration-200 ease-in-out hover:text-(--primary-text-hover)'>
                                {tCommon("common.downloadapp")}
                            </span>
                        </div>

                        <AnimatePresence>
                            {isHoveredQrcode && (
                                <motion.div
                                    className='absolute bg-white top-full -right-4 w-50 border rounded-xl border-[#ccc] overflow-hidden z-50 shadow-lg'
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}>
                                    <Image src={qrDownload} loading='eager' alt='Download App' className='px-0.5 pb-0.5' />
                                    <div className='flex pb-3 justify-between items-center'>
                                        <a href="https://www.apple.com/vn/app-store/">
                                            <Image src={appstoreLink} alt='AppStore' className='w-19 ml-4' />
                                        </a>
                                        <a href="https://play.google.com/store/">
                                            <Image src={playstoreLink} alt='Play Store' className='w-19 mr-4' />
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className='flex items-center'>
                        <span className='select-none cursor-default text-[15px] text-(--primary-text)'>
                            {tCommon("navtop.connects")}
                        </span>
                        <div className='flex items-center ml-1 gap-1.5'>
                            <a href="https://facebook.com/">
                                <Icons.FacebookIcon className='block w-5.5 h-5.5' />
                            </a>
                            <a href="https://instagram.com/">
                                <Icons.InstagramIcon className='block w-4.5 h-4.5' />
                            </a>
                            <a href="https://youtube.com/">
                                <Icons.YoutubeIcon className='block w-6 h-6' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-5 h-full'>
                    <div className='h-full relative cursor-pointer before:content-[""] before:absolute before:-right-2.5 before:w-px before:h-5.5 before:bg-gray-300 before:top-1/2 before:-translate-y-1/2 before:select-none before:pointer-events-none'
                        onMouseEnter={() => setIsHoveredLanguage(true)}
                        onMouseLeave={() => setIsHoveredLanguage(false)}>
                        <div className='flex h-full group items-center'>
                            <div className='flex items-center gap-0.5 select-none cursor-pointer'>
                                <Icons.LanguageIcon className='w-5 h-5 block text-(--primary-text-icon)' />
                                <span className='text-[15px] text-(--primary-text) transition-all duration-200 ease-in-out hover:text-(--primary-text-hover)'>{currentLang?.name}</span>
                            </div>
                            <Icons.RightIcon className='flex items-center group-hover:rotate-90 w-5 h-5 text-(--primary-text) transition-all duration-150 ease-in-out' />
                        </div>
                        <AnimatePresence>
                            {isHoveredLanguage && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className='absolute bg-white top-full -right-4 w-60 border rounded-xl border-[#ccc] overflow-hidden z-50 shadow-md'>
                                    {languages.map((lang) => {
                                        const isLanguageActive = locale === lang.code;
                                        return (
                                            <button
                                                key={lang.code}
                                                className='flex items-center justify-between border-b border-b-[#ccc] pl-1 pr-1.5 h-11 w-full hover:bg-(--bg-white-hover)'
                                                onClick={() => handleChangeLang(lang.code)}>
                                                <div className="flex items-center overflow-hidden py-1">
                                                    <Image
                                                        src={`https://flagcdn.com/w40/${lang.flag.toLowerCase()}.webp`}
                                                        alt={lang.name}
                                                        width={40}
                                                        height={40}
                                                        className="w-7 h-7 block mr-1.5 rounded-full"
                                                    />
                                                    <span className='text-[15px]'>{lang.name}</span>
                                                </div>

                                                {isLanguageActive && (
                                                    <Icons.CheckIcon className="w-5 h-5 text-(--primary-text-icon)" />
                                                )}
                                            </button>
                                        );
                                    })}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className='flex group items-center gap-0.5 select-none cursor-pointer relative before:content-[""] before:absolute before:-right-2.5 before:w-px before:h-5.5 before:bg-gray-300 before:top-1/2 before:-translate-y-1/2'>
                        <Icons.CheckorderIcon className='w-4.5 h-4.5 block text-(--primary-text-icon)' />
                        <span className='text-[15px] text-(--primary-text) transition-all duration-200 ease-in-out hover:text-(--primary-text-hover)'>
                            {tCommon("navtop.checkorder")}
                        </span>
                    </div>
                    <div className='flex group items-center gap-0.5 select-none cursor-pointer'>
                        <Icons.HelpIcon className='w-5 h-5 block text-(--primary-text-icon)' />
                        <span className='text-[15px] text-(--primary-text) transition-all duration-200 ease-in-out hover:text-(--primary-text-hover)'>
                            {tCommon("navtop.help")}
                        </span>
                    </div>
                </div>
            </div >
        </div >
    );
};