import { Container as RawContainer } from "styled-bootstrap-grid";
import styled, { css } from "styled-components";

type BoxProps = {
    margin?: string;
    padding?: string;
};

type FlexProps = {
    justifyContent?:
        | "flex-start"
        | "flex-end"
        | "center"
        | "space-between"
        | "space-around"
        | "space-evenly";
    alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
    flexDirection?: "row" | "column";
};

export const Container = styled(RawContainer)``;

export const Box = styled.div<BoxProps>`
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
`;

export const Flex = styled.div<FlexProps>`
    display: flex;
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
    flex-direction: ${(props) => props.flexDirection};
`;

export const FlexCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InlineInputGroup = styled.div`
    display: flex;
    input {
        margin-right: 8px;
    }
    button {
        border-radius: 4px;
    }
`;

export const centerAbsolutely = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
