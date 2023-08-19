import styled from "styled-components"

export const Button = styled.button`
    padding: 10px 18px;
    background-color: ${(props)=>props.isOutline?"white":"black"};
    color: ${(props)=>props.isOutline?"black":"white"};
    border: 1px solid black;
    border-radius: 5px;
    min-width: 220px;
    font-size: 16px;
    cursor: pointer;
    transition: .3s ease-in-out;

    &:hover{
        background-color: ${(props)=>props.isOutline?"black":"white"};
        border: 1px solid black;
        color: ${(props)=>props.isOutline?"white":"black"};
    }
`