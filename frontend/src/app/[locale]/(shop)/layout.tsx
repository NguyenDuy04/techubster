"use client";

import { PageTransition } from "@/components/layout/page-transition";
import { TopNavSection } from "@/components/common/topnav";
import { HeaderSection } from "@/components/common/header";

export default function DashboardGroupLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen h-full">
            <div className="flex min-w-0 flex-1 flex-col">
                <TopNavSection />
                <HeaderSection />
                <main className="flex-1 overflow-x-hidden bg-muted/30 p-4 pb-20 sm:p-6 lg:pb-6">
                    <PageTransition>{children}</PageTransition>
                </main>
            </div>
        </div>
    );
}
