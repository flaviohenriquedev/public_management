import * as S from "./style";

type PageLayoutRootProps = {
    children: React.ReactNode;
};

export const PageLayoutRoot = ({ children }: PageLayoutRootProps) => {
    return <S.Root>{children}</S.Root>;
};
