import { AppLayout } from "@/components/containers/app_layout";
import { Providers } from "@/providers/Providers";
import "./globals.css";
import "./themes.css";
export const metadata = {
    title: "SIGEP",
    description: "Sistema Integrado de Gestão Pública",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <body>
                <Providers>
                    <AppLayout>{children}</AppLayout>
                </Providers>
            </body>
        </html>
    );
}
