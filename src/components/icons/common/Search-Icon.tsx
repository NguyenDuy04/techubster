import { SVGProps } from "react";

export const SearchIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`${className} stroke-2`}
        {...props}>
        <path d="m21 21-4.34-4.34" />
        <circle cx="11" cy="11" r="8" />
    </svg>
);