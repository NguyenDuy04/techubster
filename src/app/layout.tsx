import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin", "vietnamese"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Techubster",
    description: "Elevate Your Tech!",
};

export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="vi" className="antialiased" suppressHydrationWarning>
            <body className={`${inter.className} antialiased`} suppressHydrationWarning>
                {children}
            </body>
        </html >
    );
}
