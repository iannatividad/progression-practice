import { rem } from "polished";
import { DefaultTheme } from "styled-components";
const colors = {
    // primary
    primaryBase: "#3f1fb5",

    // secondary
    secondaryBase: "#2BC6E7",

    // accent
    accentBase: "#FCAC3A",

    //bg
    background: "#030a21",
    navbarBg: "rgba(157, 165, 191, 0.1)",
    navbarBgDark: "#141418",

    // dark
    darkBase: "#323135",
    darkLight20: "#5B5A5D",
    darkLight50: "#98989A",
    darkLight80: "#D6D6D7",
    darkLight90: "#EAEAEB",
    darkLight98: "#FBFBFB",

    // gray
    gray1: "#333333",
    gray2: "#4F4F4F",
    gray3: "#828282",
    gray4: "#BDBDBD",
    gray5: "#E0E0E0",
    gray6: "#F2F2F2",

    // white
    white: "#FFFFFF",
};

const fontWeights = {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
};

const fontSizes = {
    h1: rem("87px"),
    h2: rem("67px"),
    h3: rem("50px"),
    h4: rem("38px"),
    h5: rem("24px"),
    h6: rem("18px"),
    body1: rem("16px"),
    body2: rem("14px"),
    body3: rem("12px"),
    caption: rem("12px"),
};

const size = {
    mobileS: "320px",
    mobileM: "376px",
    mobileL: "426px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
};

const defaultTheme: DefaultTheme = {
    colors,
    fontSizes,
    fontWeights,
    size,
};

export default defaultTheme;
