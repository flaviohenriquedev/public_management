import { TButton } from '@/types/Global';
import * as S from './style'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    classButton: TButton
}

const ButtonRoot = ({ children, classButton }: ButtonProps) => {
    return (
        <S.Container classButton={classButton}>
            {children}
        </S.Container>
    );
}

export default ButtonRoot;
