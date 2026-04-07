"use client"

import { Icons } from '@/components/icons';
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import { useState } from 'react';
import qrDownload from "../../../public/images/downloadapp/qr_download.png";
import appstoreLink from "../../../public/images/downloadapp/appstore_download.png";
import playstoreLink from "../../../public/images/downloadapp/play_download.png";
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
    const tCommon = useTranslations("common");
    const [isHovered, setIsHovered] = useState(false);

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
                        className='relative before:content-[""] before:absolute before:-right-2.5 before:w-px before:h-5.5 before:bg-gray-300 before:top-1/2 before:-translate-y-1/2 h-full group'
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        <div className='flex items-center gap-0.5 cursor-pointer select-none h-full'>
                            <Icons.DownloadIcon className='w-5 h-5 block text-(--primary-text-icon)' />
                            <span className='text-[15px] text-(--primary-text) transition-all duration-200 ease-in-out hover:text-(--primary-text-hover)'>
                                {tCommon("common.downloadapp")}
                            </span>
                        </div>

                        <AnimatePresence>
                            {isHovered && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className='absolute bg-white top-full -right-4 w-50 border rounded-xl border-[#ccc] overflow-hidden z-50 shadow-lg'
                                >
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
                <div className='flex items-center gap-5'>
                    <div className='flex group items-center relative before:content-[""] before:absolute before:-right-2.5 before:w-px before:h-5.5 before:bg-gray-300 before:top-1/2 before:-translate-y-1/2'>
                        <div className='flex items-center gap-0.5 select-none cursor-pointer'>
                            <Icons.LanguageIcon className='w-5 h-5 block text-(--primary-text-icon)' />
                            <span className='text-[15px] text-(--primary-text) transition-all duration-200 ease-in-out hover:text-(--primary-text-hover)'>English</span>
                        </div>
                        <Icons.RightIcon className='flex items-center group-hover:rotate-90 w-5 h-5 text-(--primary-text) transition-all duration-150 ease-in-out' />
                    </div>
                    <div>
                        <div className='flex group items-center gap-0.5 select-none cursor-pointer relative before:content-[""] before:absolute before:-right-2.5 before:w-px before:h-5.5 before:bg-gray-300 before:top-1/2 before:-translate-y-1/2'>
                            <Icons.CheckorderIcon className='w-4.5 h-4.5 block text-(--primary-text-icon)' />
                            <span className='text-[15px] text-(--primary-text) transition-all duration-200 ease-in-out hover:text-(--primary-text-hover)'>
                                {tCommon("navtop.checkorder")}
                            </span>
                        </div>
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