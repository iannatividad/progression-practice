import React from "react";
import { Navbar } from "../../components/Navbar";
import { SideNav } from "../../components/SideNav";
import { useIsFriday } from "../../hooks/useIsFriday";

import * as S from "./styles";

interface fridayProps {}

export const Friday: React.FC<fridayProps> = () => {
    const isFriday = useIsFriday();

    return (
        <>
            <SideNav />
            <Navbar />
            <S.Wrapper>
                <S.Title>Is it Friday today? {isFriday}</S.Title>
            </S.Wrapper>
        </>
    );
};
