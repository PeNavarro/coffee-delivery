import styled from "styled-components";

export const CheckoutContainer = styled.main` 
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 32px;

    padding-top: 40px;
`

export const OrderData = styled.main` 
    grid-column: span 7;

    h1{
        font-size: 18px;
        color: ${props => props.theme['base-subtitle']};
    }

    .deliveryBox{
        padding: 40px;
        margin-top: 15px;

        background-color: ${props => props.theme['base-card']};

        .boxTitle{
            display: flex;
            gap: 10px;
            margin-bottom: 32px;

            h3{
                line-height: 18px;
                font-family: 'Roboto', sans-serif;
                font-size: 16px;
                font-weight: 400;
                color: ${props => props.theme['base-subtitle']};
            }

            p{
                font-size: 14px;
                margin-top: 5px;
                color: ${props => props.theme['base-text']};
            }
        }
    }
`

export const CartData = styled.main` 
    grid-column: span 5;

    h2{
        font-size: 18px;
        color: ${props => props.theme['base-subtitle']};
    }
`

export const FormContainer = styled.div` 
    display: flex;
    flex-direction: column;
    gap: 16px;

    input{
        padding: 12px;
        border: 1px solid ${props => props.theme['base-button']};
        background-color: ${props => props.theme['base-input']};
        border-radius: 4px;

        outline: none;
        position: relative;

        color: ${props => props.theme['base-text']};
        font-size: 14px;

        &::placeholder{
            color: ${props => props.theme['base-label']};
        }

        &:active,
        &:focus{
            border: 1px solid ${props => props.theme['yellow-dark']};
        }
        
        &:first-child{
            max-width: 200px;
        }
    }

    div{
        display: flex;
        gap: 12px;

        input{
            flex-grow: 1;
        }
    }
`