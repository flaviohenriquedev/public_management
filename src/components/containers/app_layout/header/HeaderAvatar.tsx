import * as S from "./style";

import Image from "next/image";
import Profile from '../../../../../public/profile.jpg'

export const HeaderAvatar = () => {
    return (
        <S.AvatarContainer>
            <S.AvatarContent>
                <Image src={Profile} alt="profile_picture" />
            </S.AvatarContent>
        </S.AvatarContainer>
    );
};
