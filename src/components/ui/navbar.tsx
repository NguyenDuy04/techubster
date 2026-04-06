import { Icons } from '@/components/icons';
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import qrDownload from "../../../public/images/downloadapp/qr_download.png";
import appstoreLink from "../../../public/images/downloadapp/appstore_download.png";
import playstoreLink from "../../../public/images/downloadapp/play_download.png";

export const Navbar = () => {
    const tCommon = useTranslations("common");

    return (
        <div className='border-b border-b-[#ccc] bg-(--navtop-bg)'>
            <div className='flex justify-between items-center h-9 max-w-360 mx-auto'>
                <div className='flex items-center gap-5 h-full'>
                    <div className='flex items-center gap-0.5 cursor-pointer select-none h-full'>
                        <Icons.MapIcon className='w-5.5 h-5.5 block text-(--primary-text-icon)' />
                        <span className='text-[15px] text-(--primary-text) transition-all duration-200 ease-in-out hover:text-(--primary-text-hover)'>
                            {tCommon("navtop.storelocator")}
                        </span>
                    </div>
                    <div className='relative h-full group transition-all duration-200 ease-in-out origin-top-right'>
                        <div className='flex items-center gap-0.5 cursor-pointer select-none h-full'>
                            <Icons.DownloadIcon className='w-5 h-5 block text-(--primary-text-icon)' />
                            <span className='text-[15px] text-(--primary-text) transition-all duration-200 ease-in-out hover:text-(--primary-text-hover)'>{tCommon("common.downloadapp")}</span>
                        </div>
                        <div className='hidden group-hover:block transition-all duration-200 origin-top-right ease-in-out absolute bg-white top-full -right-4 w-50 border rounded-xl border-[#ccc] overflow-hidden'>
                            <Image src={qrDownload} alt='Download App' className='px-0.5 pb-0.5' />
                            <div className='flex pb-3 justify-between items-center'>
                                <a href="https://www.apple.com/vn/app-store/">
                                    <Image src={appstoreLink} alt='AppStore' className='w-19 ml-4' />
                                </a>
                                <a href="https://play.google.com/store/">
                                    <Image src={playstoreLink} alt='Play Store' className='w-19 mr-4' />
                                </a>
                            </div>
                        </div>
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
                    <div className='flex group'>
                        <div className='flex items-center gap-0.5 select-none cursor-pointer'>
                            <Icons.LanguageIcon className='w-5 h-5 block text-(--primary-text-icon)' />
                            <span className='text-[15px] text-(--primary-text) transition-all duration-200 ease-in-out hover:text-(--primary-text-hover)'>English</span>
                        </div>
                        <Icons.RightIcon className='group-hover:rotate-90 w-5.5 h-5.5 text-(--primary-text) transition-all duration-150 ease-in-out' />
                    </div>
                    <div>
                        <div className='flex items-center gap-0.5 select-none cursor-pointer'>
                            <Icons.CheckorderIcon className='w-4.5 h-4.5 block text-(--primary-text-icon)' />
                            <span className='text-[15px] text-(--primary-text) transition-all duration-200 ease-in-out hover:text-(--primary-text-hover)'>
                                {tCommon("navtop.checkorder")}
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center gap-0.5 select-none cursor-pointer'>
                        <Icons.HelpIcon className='w-5 h-5 block text-(--primary-text-icon)' />
                        <span className='text-[15px] text-(--primary-text) transition-all duration-200 ease-in-out hover:text-(--primary-text-hover)'>
                            {tCommon("navtop.help")}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};