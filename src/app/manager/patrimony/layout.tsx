import { PageLayout } from "@/components/containers/page_layout";

import { PatrimonyRoutes as routes } from "@/data/routes/PatrimonyRoutes";

export default function PatrimonyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <PageLayout pageTitle="Patrimônio" routes={routes}>
            {children}
        </PageLayout>
    );
}
