import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 60px;

    background: transparent;

    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Logo = styled.h2`
    color: ${(props) => props.theme.colors.white};
    padding: 0;
    margin: 0 30px 0 0;
`;

export const LogoImage = styled.img`
    width: 50px;
`;
