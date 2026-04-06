"use client"

import { useEffect } from "react";
import { useTheme } from "next-themes";

export const ToggleTheme = () => {
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        console.log("Theme hiện tại:", theme);
    }, [theme]);

    return (
        <button className="p-4 space-x-2 border border-amber-400 cursor-pointer" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>

            <div className="cursor-pointer">Light</div>
            <div className="cursor-pointer">Dark</div>
        </button>
    )
}