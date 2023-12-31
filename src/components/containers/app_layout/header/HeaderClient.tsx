import * as S from "./style";

type HeaderClientProps = {
    clientName: string;
};

export const HeaderClient = ({ clientName }: HeaderClientProps) => {
    return (
        <S.ClientContainer>
            <h3>{clientName}</h3>
        </S.ClientContainer>
    );
};
