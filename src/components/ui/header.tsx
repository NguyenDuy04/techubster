import Image from 'next/image'
import logoImage from "../../../public/images/logo/logo__icon.png";

export const Header = () => {

    return (
        <div className='max-w-360 mx-auto border-b border-b-[#ccc] h-12.5 flex items-center'>
            <div className='hidden'>
                <a href="" className='flex items-center w-9 h-9 bg-(--primary-color)'>
                    <Image src={logoImage} alt='Home' loading='eager' className='w-9 h-9 bg-transparent' />
                    <span className='hidden'>Techubster</span>
                </a>
            </div>
            <div className='hidden'></div>
            <div className=''>
                <div className='h-10 border border-[#ccc]'>
                    <input type="text" placeholder='Search for Products ...' />
                </div>
            </div>
            <div></div>
        </div>
    )
}