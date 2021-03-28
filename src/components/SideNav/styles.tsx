import styled from "styled-components";

export const Container = styled.nav`
    width: 5rem;
    height: 100vh;
    position: fixed;
    background: ${(props) => props.theme.colors.navbarBg};
    transition: width 200ms ease;

    .link-text {
        display: none;
        color: ${(props) => props.theme.colors.white};
    }

    &:hover {
        width: 16rem;

        .link-text {
            display: block;
        }
    }
`;

export const NavbarWrapper = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .logo-icons {
        width: 2rem;
        min-width: 2rem;
        transform: rotate(0deg);
        transition: 300ms;
    }

    &:hover {
        .logo-icons {
            transform: rotate(-540deg);
            margin-left: 4rem;
        }
    }
`;

export const NavLogo = styled.li`
    cursor: pointer;
    transition: 300ms;
    margin-bottom: 1rem;
    text-align: center;
    letter-spacing: 0.3ch;
    background: ${(props) => props.theme.colors.navbarBg};
    width: 100%;

    .links {
        height: 5rem;
        color: ${(props) => props.theme.colors.primaryBase};
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }
`;

export const NavbarItem = styled.li`
    width: 100%;
    cursor: pointer;
    transition: 300ms;

    &:hover {
        background: ${(props) => props.theme.colors.navbarBgDark};
    }
`;

export const Links = styled.a`
    display: flex;
    align-items: center;
    height: 5rem;
    color: ${(props) => props.theme.colors.primaryBase};
    text-decoration: none;
    transition: 200ms;

    .link-icons {
        width: 2rem;
        min-width: 2rem;
        margin: 0 1.5rem;
        color: ${(props) => props.theme.colors.white};
        filter: grayscale(100%) opacity(0.7);
        transition: 200ms;
    }

    &:hover {
        .link-icons {
            filter: grayscale(0%) opacity(1);
        }
    }
`;
