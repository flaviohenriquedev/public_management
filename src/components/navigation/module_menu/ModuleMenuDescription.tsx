"use client";

import { useRouter } from "next/navigation";
import * as S from "./style";

type ModuleMenuDescriptionProps = {
    description: string;
    href: string;
};

export const ModuleMenuDescription = ({
    description,
    href,
}: ModuleMenuDescriptionProps) => {
    const router = useRouter();

    return (
        <S.DescriptionContainer>
            <S.Description
                onClick={() => router.push(href)}
                onMouseEnter={() => router.prefetch(href)}
            >
                {description}
            </S.Description>
        </S.DescriptionContainer>
    );
};
