import React from "react";
import { Navbar } from "../Navbar";
import { SideNav } from "../SideNav";
import * as S from "./styles";

type Props = {
    children: React.ReactNode;
};

function Layout({ children }: Props) {
    return (
        <>
            <SideNav />
            <Navbar />
            <S.Wrapper>{children}</S.Wrapper>
        </>
    );
}

export default Layout;
