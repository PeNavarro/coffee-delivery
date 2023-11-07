import styled from "styled-components";

export const CheckoutContainer = styled.main` 
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 32px;

    padding-top: 40px;
    padding-bottom: 240px;
`

export const OrderData = styled.main` 
    grid-column: span 7;

    h1{
        font-size: 18px;
        color: ${props => props.theme['base-subtitle']};
    }
`

export const CartData = styled.main` 
    grid-column: span 5;

    h2{
        font-size: 18px;
        color: ${props => props.theme['base-subtitle']};
    }
`

export const DeliveryData = styled.div` 
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

    .helperText{
        color: ${props => props.theme['base-label']};
        text-align: left;
        width: 76px;
        border-left: 0px !important;
        border-radius: 0 4px 4px 0px;
        margin: 0 0 0 -50px;
        padding: 0 12px 0 4px;
        flex-grow: 0;
        pointer-events: none;
        font-style: italic;
    }

    .stateInput{
        flex-grow: 0;
        width: 60px;
    }

    .inputWithHelperText:focus + .helperText{
        border: 1px solid ${props => props.theme['yellow-dark']};
    }

    div{
        display: flex;
        gap: 12px;

        input{
            flex-grow: 1;
        }
    }
`

export const BoxContainer = styled.div`
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
`

export const PaymentOptions = styled.div`
    display: flex;
    gap: 12px;
    
    label{
        padding: 16px;
        background-color: ${props => props.theme['base-button']};
        border: 1px solid transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        gap: 12px;
        border-radius: 6px;
        cursor: pointer;

        font-size: 12px;
        color: ${props => props.theme['base-text']};
        text-transform: uppercase;

        transition: all 200ms ease-in-out;

        &:hover{
            background-color: ${props => props.theme['base-hover']};

        }
    }

    input:checked + label{
        border: 1px solid ${props => props.theme['purple']};
        background-color: ${props => props.theme['purple-light']};
    }

    input{
        display: none;
    }
`

export const CartBox = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-radius: 6px 44px;
    background-color: ${props => props.theme['base-card']};
    margin-top: 15px;

    .emptyCartText{
        text-align: center;
        color: ${props => props.theme['base-text']};
        margin-bottom: 30px;
    }

    .prices{
        display: flex;
        flex-direction: column;
        gap: 12px;

        .price{
            display: flex;
            justify-content: space-between;
            color: ${props => props.theme['base-text']};
        }

        .total{
            display: flex;
            justify-content: space-between;
            font-size: 20px;
            font-weight: 700;
            color: ${props => props.theme['base-subtitle']};
        }
    }

    .confirmOrder{
        width: 100%;
        padding: 12px 8px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        background-color: ${props => props.theme['yellow']};

        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        text-transform: uppercase;
        color: ${props => props.theme['white']};

        transition: all 200ms ease-in-out;

        &:hover{
            background-color: ${props => props.theme['yellow-dark']};
        }

        &:disabled{
            opacity: 0.6;
            background-color: ${props => props.theme['yellow']};
            cursor: not-allowed;
        }
    }
`