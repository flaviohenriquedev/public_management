import { useState } from "react";
import { useRouter } from "next/navigation";
import * as S from "./style";

interface SubMenuProps {
    description: string;
    pageName?: string;
    children: React.ReactNode;
    href?: string;
}

export const SubMenu = ({
    description,
    pageName,
    children,
    href,
}: SubMenuProps) => {
    const route = useRouter();
    const [subMenuListClosed, setSubMenuListClosed] = useState(true);

    function handleClick() {
        if (href) {
            let hrefWithPagename = `${href}?pn=${pageName}`;
            route.push(
                href.startsWith("/") ? hrefWithPagename : "/" + hrefWithPagename
            );
        } else {
            setSubMenuListClosed(!subMenuListClosed);
        }
    }

    return (
        <S.SideMenuSubItem>
            <S.SideMenuSubItemDescription onClick={() => handleClick()}>
                {description}
            </S.SideMenuSubItemDescription>
            <S.SideSubMenuSubList closed={subMenuListClosed}>
                {children}
            </S.SideSubMenuSubList>
        </S.SideMenuSubItem>
    );
};
