import * as S from "./style";

import { MenuItem } from "@/types/Global";
import { PageLayoutContent } from "./PageLayoutContent";
import { PageLayoutHeader } from "./PageLayoutHeader";
import { PageLayoutRoot } from "./PageLayoutRoot";
import { PageLayoutSidemenu } from "./PageLayoutSidemenu";

type PageLayoutProps = {
    routes: MenuItem[];
    pageTitle: string;
    children: React.ReactNode;
};

export const PageLayout = ({
    children,
    pageTitle,
    routes,
}: PageLayoutProps) => {
    return (
        <PageLayoutRoot>
            <PageLayoutHeader title={pageTitle} />
            <S.SidemenuAndContent>
                <PageLayoutSidemenu routes={routes} />
                <PageLayoutContent>{children}</PageLayoutContent>
            </S.SidemenuAndContent>
        </PageLayoutRoot>
    );
};
