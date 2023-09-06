import { PageLayout } from "@/components/containers/page_layout";

import { ShoppingRoutes as routes } from "@/data/routes/ShoppingRoutes";

export default function ShoppingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <PageLayout pageTitle="Compras" routes={routes}>
            {children}
        </PageLayout>
    );
}
