import React from "react";
import Layout from "../../components/Layout";
import { useIsFriday } from "../../hooks/useIsFriday";
import * as S from "./styles";

interface fridayProps {}

export const Friday: React.FC<fridayProps> = () => {
    const isFriday = useIsFriday();

    return (
        <>
            <Layout>
                <S.Wrapper>
                    <S.Title>Is it Friday today? {isFriday}</S.Title>
                </S.Wrapper>
            </Layout>
        </>
    );
};
