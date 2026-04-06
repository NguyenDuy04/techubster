import { Icons } from '@/components/icons';
import { useTranslations } from 'next-intl';

export const Navbar = () => {
    const tCommon = useTranslations("common");

    return (
        <div className='flex justify-between'>
            <div className='flex'>
                <div className='flex'>
                    <Icons.MapIcon className='w-5 h-5 block' />
                    <span>
                        {tCommon("navtop.storelocator")}
                    </span>
                </div>
                <div className='flex'>
                    <Icons.DownloadIcon />
                    <span>Download App</span>
                </div>
                <div className='flex'>
                    <span>
                        Connects
                    </span>
                    <div className='flex'>
                        <a href="https://facebook.com/">
                            <Icons.FacebookIcon />
                        </a>
                        <a href="https://instagram.com/">
                            <Icons.InstagramIcon />
                        </a>
                        <a href="https://youtube.com/">
                            <Icons.YoutubeIcon />
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='flex'>
                    <Icons.LanguageIcon />
                    <span>English</span>
                </div>
                <div className='flex'>
                    <Icons.CheckorderIcon />
                    <span>
                        Check Order
                    </span>
                </div>
                <div className='flex'>
                    <Icons.HelpIcon />
                    <span>
                        Help
                    </span>
                </div>
            </div>
        </div>
    );
};