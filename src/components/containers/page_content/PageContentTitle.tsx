"use client";

import { useSearchParams } from "next/navigation";
import * as S from "./style";

export const PageContentTitle = () => {
    const searchParams = useSearchParams();
    const pn = searchParams.get("pn");
    return <S.Title>{pn}</S.Title>;
};
