import { TButton } from '@/types/Global'
import tw from 'tailwind-styled-components'

interface ButtonProps {
    classButton: TButton
}

export const Container = tw.button<ButtonProps>`

    ${(p) => p.classButton === 'primary' ? "btn btn-info" :
        p.classButton === 'success' ? "btn btn-success" :
            p.classButton === 'warning' ? "btn btn-warning" :
                p.classButton === 'danger' ? "btn btn-error" : "btn btn-info"}

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
    
    active:scale-95
`
export const Title = tw.p``

export const Icon = tw.div``