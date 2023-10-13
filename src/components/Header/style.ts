import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 32px 0;

    nav{
        display: flex;
        gap: 12px;
    }

    .location{
        background-color: ${props => props.theme['purple-light']};
        padding: 8px;
        border-radius: 6px;

        display: flex;
        align-items: center;
    }

    .cart{
        background-color: ${props => props.theme['yellow-light']};
        padding: 8px;
        border-radius: 6px; 
        border: none;

        display: flex;
        align-items: center;
    }
`