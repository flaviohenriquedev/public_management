"use client";

import { ThemeProvider } from "next-themes";
import { SideMenuContextProvider } from "@/context/SideMenuContext";

type ProvidersProps = {
    children: React.ReactNode;
};
export const Providers = ({ children }: ProvidersProps) => {
    return (
        <SideMenuContextProvider>
            <ThemeProvider defaultTheme="default">{children}</ThemeProvider>
        </SideMenuContextProvider>
    );
};
