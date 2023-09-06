import tw from "tailwind-styled-components";

export const Container = tw.header`
    flex
    items-center
    justify-between
    pl-4
    pr-4
    bg-header_bg_color
    shadow-md
    text-font_secondary_color
    fixed
    z-10
    w-full
    top-0
    h-14
`;

export const ClientContainer = tw.div`
    font-bold
    text-font_header_color
`;

export const Avatar = tw.div`
    w-10
    h-10
    rounded-full
    bg-red-100
`;
