import tw from "tailwind-styled-components";

interface SideMenuListInterface {
    closed: boolean;
}

interface SideMenuItemHeaderInterface {
    expanded: boolean;
}

export const SideMenuItem = tw.li`
    group
    flex
    flex-col
    flex-nowrap
    relative
`;

export const SideMenuItemHeader = tw.h2`
    h-8
    flex
    items-center
    hover: cursor-pointer
`;

export const IconContainer = tw.div`s
    ml-4
    mr-5
`;

export const DescriptionContainer = tw.div<SideMenuItemHeaderInterface>`
    ${(p) => (p.expanded ? "" : "text-[0]")}
    transition-all
    ease-in-out
`;

export const SideMenuSubList = tw.ul<SideMenuListInterface>`
    ${(p) => (p.closed ? "hidden" : "block")}
    ml-4
`;

export const SideMenuSubItem = tw.li`
    pl-4    
`;

export const SideMenuSubItemDescription = tw.h4`
    text-sm
    hover:cursor-pointer
`;

export const SideSubMenuSubList = tw.ul<SideMenuListInterface>`
    ${(p) => (p.closed ? "hidden" : "block")}
`;

export const Flyout = tw.div`
    absolute
    w-96
    ml-12
    opacity-0
    invisible
    z-20
    shadow-md
    rounded-md
    py-1
    px-4
    -translate-x-5
    bg-slate-200

    group-hover:opacity-100
    hover:cursor-pointer
    transform
    transition-all
    duration-200
    group-hover:translate-x-0
    group-hover:visible
`;

export const FlyoutTitle = tw.h1`
    
`;
