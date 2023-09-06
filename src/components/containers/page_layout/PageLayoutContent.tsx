import * as S from "./style";

type PageLayoutContentProps = {
    children: React.ReactNode;
};

export const PageLayoutContent = ({ children }: PageLayoutContentProps) => {
    return <S.Content>{children}</S.Content>;
};
