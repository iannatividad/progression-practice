import React from "react";

import * as S from "./styles";

interface navbarProps {}

export const Navbar: React.FC<navbarProps> = () => {
    return (
        <S.Wrapper>
            <S.LogoWrapper>
                <S.Logo>Progression 📈</S.Logo>
            </S.LogoWrapper>
        </S.Wrapper>
    );
};
