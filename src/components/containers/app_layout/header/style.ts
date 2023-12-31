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
    h-16
`;

export const ClientContainer = tw.div`
    font-bold
    text-font_header_color
`;

export const AvatarContainer = tw.div`
    avatar
    placeholder
    online
`

export const AvatarContent = tw.div`
    bg-neutral-focus
    text-neutral-content
    rounded-full w-12
`