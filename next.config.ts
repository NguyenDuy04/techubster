import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
    reactCompiler: true,
};

const widthNextIntl = createNextIntlPlugin();

export default widthNextIntl(nextConfig);
