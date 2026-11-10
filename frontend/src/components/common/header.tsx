import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { BellRing } from 'lucide-react';

export const HeaderSection = () => {
    return (
        <header
            id="header"
            className="flex h-15 items-center justify-center lg:bg-header">
            <div className="flex w-full items-center justify-between px-2">
                {/* Logo */}
                <Link href="/" className="shrink-0">
                    <Image
                        src="/logo/techubster__logo-removebg-preview (2).png"
                        alt="Techubster Logo"
                        width={70}
                        height={70}
                        priority
                        sizes="80"
                        className="w-8 h-8" />
                </Link>
                <div className="flex items-center gap-5">
                    <button className="flex items-center justify-center w-9 h-9">
                        <BellRing />
                    </button>
                    <div className="relative w-9 h-9 rounded-full border-2 border-amber-700 overflow-hidden">
                        <Image
                            src="/logo/avatars.jpg"
                            alt="Logo"
                            fill
                            sizes="80"
                            priority
                            className="" />
                    </div>
                </div>
            </div>
        </header>
    );
};
