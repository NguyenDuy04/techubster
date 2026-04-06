import { SVGProps } from "react";

export const CheckorderIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`${className} stroke-2`}
        {...props}>
        <path d="M4 14h6" />
        <path d="M4 2h10" />
        <rect x="4" y="18" width="16" height="4" rx="1" />
        <rect x="4" y="6" width="16" height="4" rx="1" />
    </svg>
);