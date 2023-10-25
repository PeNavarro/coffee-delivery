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

        color: ${props => props.theme['purple-dark']};
    }

    .cartLink{
        display: flex;

        .cart{
            background-color: ${props => props.theme['yellow-light']};
            padding: 8px;
            border-radius: 6px; 
            border: none;

            display: flex;
            align-items: center;

            position: relative;
            cursor: pointer;

            span{
                position: absolute;
                transform: translate(-50%, -50%);
                top: 2px;
                right: -50%;

                padding: 2px;
                border-radius: 100%;
                min-width: 20px;
                width: fit-content;
                height: 20px;

                display: flex;
                align-items: center;
                justify-content: center;

                background-color: ${props => props.theme['yellow-dark']};
                color: ${props => props.theme['white']};
                font-size: 12px;
                font-weight: 700;
            }
        }
    }
`