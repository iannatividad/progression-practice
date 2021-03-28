import React from "react";
import { Navbar } from "../../components/Navbar";
import { SideNav } from "../../components/SideNav";

import * as S from "./styles";

interface homeProps {}

export const Home: React.FC<homeProps> = () => {
    return (
        <S.Wrapper>
            <SideNav />
            <Navbar />
        </S.Wrapper>
    );
};
