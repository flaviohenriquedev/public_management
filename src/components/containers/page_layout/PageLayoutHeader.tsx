import * as S from "./style";

type PageLayoutHeaderProps = {
    title: string;
};

export const PageLayoutHeader = ({ title }: PageLayoutHeaderProps) => {
    return <S.Header>{title}</S.Header>;
};
