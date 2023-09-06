import * as S from "./style";

type RightProps = {
    children: React.ReactNode;
};
export const HeaderRightContent = ({ children }: RightProps) => {
    return <S.RightContainer>{children}</S.RightContainer>;
};
