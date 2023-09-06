import * as S from "./style";

type ModuleMenuIconProps = {
    icon: JSX.Element;
};

export const ModuleMenuIcon = ({ icon }: ModuleMenuIconProps) => {
    return <S.Icon>{icon}</S.Icon>;
};
