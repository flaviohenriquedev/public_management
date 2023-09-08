import tw from 'tailwind-styled-components'

export const Footer = tw.footer`
    flex
    justify-end
    items-center
    w-[50rem]
    h-14
    gap-4
    px-4
    rounded-lg
    bg-base-300

    fixed
    bottom-0
    right-0
`;

export const Button = tw.button`
    flex
    justify-center
    items-center
    w-auto
    min-w-[6rem]
    min-h-[2rem]
    max-h-[2rem]
    rounded-md
    bg-blue-500
    text-[10pt]
    text-white

    transition-all
    duration-100
    hover:bg-blue-600
    active:scale-95
`;

export const ButtonTitle = tw.p`

`