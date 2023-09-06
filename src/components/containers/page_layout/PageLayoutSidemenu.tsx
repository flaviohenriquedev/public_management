"use client";

import { Menu } from "@/components/navigation/route_menu/Menu";
import { SideMenuContext } from "@/context/SideMenuContext";
import { MenuItem } from "@/types/Global";
import { useContext, useEffect, useState } from "react";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import * as S from "./style";

type PageLayoutSidemenuProps = {
    routes: MenuItem[];
};
export const PageLayoutSidemenu = ({ routes }: PageLayoutSidemenuProps) => {
    const { expanded, setExpanded } = useContext(SideMenuContext);

    const [searchMenu, setSearchMenu] = useState("");
    const [filteredData, setFilteredData] = useState<MenuItem[]>(routes);

    function renderMenuItem() {
        return filteredData.map((route) => {
            return (
                <Menu
                    key={route.description}
                    description={route.description}
                    pageName={route.pageName}
                    icon={route.icon}
                    submenu={route.submenu}
                    href={route.href}
                />
            );
        });
    }

    useEffect(() => {
        const filterMenu = () => {
            const filteredMap: { [key: string]: MenuItem } = {};

            if (routes) {
                routes.forEach((d) => {
                    const filteredMenu: MenuItem = { ...d };
                    if (
                        d.description
                            .toLowerCase()
                            .includes(searchMenu.toLowerCase()) ||
                        (d.submenu &&
                            d.submenu.some((sub) =>
                                sub.description
                                    .toLowerCase()
                                    .includes(searchMenu.toLowerCase())
                            ))
                    ) {
                        filteredMap[d.description] = filteredMenu;
                    }

                    if (d.submenu) {
                        const filteredSubmenu = d.submenu.filter((sub) =>
                            sub.description
                                .toLowerCase()
                                .includes(searchMenu.toLowerCase())
                        );
                        if (filteredSubmenu.length > 0) {
                            filteredMenu.submenu = filteredSubmenu;
                            filteredMap[d.description] = filteredMenu;
                        }
                    }
                });
            }

            const filtered: MenuItem[] = Object.values(filteredMap);
            setFilteredData(filtered);
        };

        filterMenu();
    }, [routes, searchMenu]);

    return (
        <S.Sidemenu expanded={expanded}>
            <S.SideMenuHeader expanded={expanded}>
                <S.SearchMenu
                    expanded={expanded}
                    placeholder="Buscar Menu"
                    value={searchMenu}
                    onChange={(e) => setSearchMenu(e.target.value)}
                />
                <S.ToggleSideMenuButton onClick={() => setExpanded(!expanded)}>
                    {expanded ? (
                        <RiMenuFoldLine size={16} enableBackground={0} />
                    ) : (
                        <RiMenuUnfoldLine size={16} enableBackground={0} />
                    )}
                </S.ToggleSideMenuButton>
            </S.SideMenuHeader>
            <S.SideMenuList>{renderMenuItem()}</S.SideMenuList>
        </S.Sidemenu>
    );
};
