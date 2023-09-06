import tw from "tailwind-styled-components";

export const Container = tw.div`
    flex
    items-center
    bg-primary
    w-60
    h-24
    rounded-lg
    text-font_primary_color
    shadow-lg
    relative
`;

export const Icon = tw.div`
    flex
    justify-start
    items-center
    h-full
    w-full
    rounded-tl-lg
    rounded-bl-lg
    p-3
`;

export const DescriptionContainer = tw.div`
    flex
    items-center
    justify-end
    h-full
    w-full
`;

export const Description = tw.div`
    flex
    items-center
    h-full
    w-48
    pl-4
    shadow-xl
    rounded-lg
    backdrop-brightness-110
    backdrop-blur-sm
    bg-secondary/30
    absolute
    text-xl
    hover:cursor-pointer
`;
