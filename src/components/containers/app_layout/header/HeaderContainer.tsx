import * as S from "./style";

type HeaderContainerProps = {
    children: React.ReactNode;
};

export const HeaderContainer = ({ children }: HeaderContainerProps) => {
    return <S.Container>{children}</S.Container>;
};
