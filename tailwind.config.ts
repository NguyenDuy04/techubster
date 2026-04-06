import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,x`tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    mint: "#99FF99",
                    dark: "#000000",
                    white: "#ffffff",
                },
            },
        },
    },
    plugins: [],
};
export default config;