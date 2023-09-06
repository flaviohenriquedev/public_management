import tw from "tailwind-styled-components";

export const Root = tw.div`
    flex
    flex-col
    gap-2    
    h-full
`;

export const Title = tw.div`
    flex
    items-center
    px-2
    rounded-bl-md
    rounded-tl-md
    h-10
    bg-header_bg_color
    shadow-lg
`;

export const Children = tw.div`
    h-full
    rounded-tl-md
    p-2
    bg-header_bg_color
    shadow-lg
`;

export const Footer = tw.footer`
    flex
    justify-end
    items-center
    w-[50rem]
    h-14
    gap-4
    px-4
    rounded-lg
    bg-slate-300

    fixed
    bottom-0
    right-0
`;

export const Button = tw.button`
    flex
    justify-center
    items-center
    w-30
    h-9
    rounded-lg
    bg-red-700
    text-white
    p-5
`;
