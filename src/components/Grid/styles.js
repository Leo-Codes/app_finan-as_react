import styled from "styled-components";

export const Table = styled.table`
    width: 80%;
    max-width: 95vw;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 5px #ccc;
    border-radius: 5px;
    margin: 20px auto;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
    border-bottom:inset;
    padding-bottom:5px;
    text-align: ${(props)=> (props.alignCenter ? "center" : "start")};
    width: ${(props)=> (props.width ? props.width + "%" : "auto")};
`;