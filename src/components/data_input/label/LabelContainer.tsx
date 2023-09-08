import * as S from './style'

interface LabelContainerProps {
    children: React.ReactNode
    title: string
}

const LabelContainer = ({ children, title }: LabelContainerProps) => {
    return (
        <S.Container>
            <S.Label>
                <S.LabelSpan>{title}</S.LabelSpan>
            </S.Label>
            {children}
        </S.Container>
    );
}

export default LabelContainer;
