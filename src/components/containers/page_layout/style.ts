import tw from "tailwind-styled-components";

interface SideMenuInterface {
    expanded: boolean;
}

export const Root = tw.div`
    pt-14
    h-full
`;

export const SidemenuAndContent = tw.div`
    flex
    h-full
    gap-2
    mt-12
`;

export const Content = tw.div`
    w-full
`;

export const Header = tw.header`
    flex
    items-center
    w-full
    h-10
    px-2
    fixed
    bg-secondary
    z-10
`;

export const Sidemenu = tw.aside<SideMenuInterface>`

    ${(p) => (p.expanded ? "w-[30rem]" : "w-20")}
    
    flex
    flex-col
    flex-nowrap
    h-full
    rounded-tr-md
    bg-header_bg_color
    shadow-slate-400
    shadow-md
    duration-200
`;

export const SideMenuSearch = tw.div`
    flex
    items-center
    h-10
    mb-2
    px-2
    rounded-md
`;

export const SideMenuList = tw.ul`
    flex
    flex-col
    p-3
    rounded-md
`;

export const SideMenuHeader = tw.div<SideMenuInterface>`

    ${(p) => (p.expanded ? "justify-between" : "justify-center")}

    flex
    relative
    
    p-1
`;

export const SearchMenu = tw.input<SideMenuInterface>`

    ${(p) => (p.expanded ? "" : "hidden")}

    w-72
    pl-2
    text-[10pt]
    outline-none
    border
    border-solid
    rounded-md
`;

export const ToggleSideMenuButton = tw.button`
    flex
    justify-center
    items-center
    w-6
    h-6
    rounded-full
    bg-slate-100
    border
    border-solid
    shadow-md
    text-slate-600

`;
