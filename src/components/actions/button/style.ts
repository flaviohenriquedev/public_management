import { TButton } from '@/types/Global'
import tw from 'tailwind-styled-components'

interface ButtonProps {
    classButton: TButton
}

export const Container = tw.button<ButtonProps>`

    ${(p) => p.classButton === 'primary' ? "bg-blue-500" :
        p.classButton === 'success' ? "bg-green-500" :
            p.classButton === 'warning' ? "bg-yellow-500" :
                p.classButton === 'danger' ? "bg-red-500" : "bg-blue-500"}


    flex
    justify-center
    items-center
    w-auto
    px-3
    min-w-[6rem]
    min-h-[2rem]
    max-h-[2rem]
    rounded-md
    
    text-[10pt]
    text-white

    transition-all
    duration-100
    hover:bg-blue-600
    active:scale-95
`
export const Title = tw.p``

export const Icon = tw.div``