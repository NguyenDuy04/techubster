/** @type {import('next').NextConfig} */

import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
    reactCompiler: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "flagcdn.com",
                pathname: "/w40/**",
            }
        ]
    }
};

const widthNextIntl = createNextIntlPlugin();

export default widthNextIntl(nextConfig);
