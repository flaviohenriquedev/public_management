import * as S from "./style";

type LeftProps = {
    children: React.ReactNode;
};

export const HeaderLeftContent = ({ children }: LeftProps) => {
    return <S.LeftContainer>{children}</S.LeftContainer>;
};
