"use client";

import { ReactNode } from "react";
import { ComposeProviders } from "@/lib/compose-providers"
import { ThemeProvider } from "@/providers/theme-providers"

export const AppProvider = ({ children }: { children: ReactNode }) => {
    return (
        <ComposeProviders
            providers={[
                {
                    component: ThemeProvider
                },
            ]}>
            {children}
        </ComposeProviders>
    );
}