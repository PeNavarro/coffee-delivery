import styled from "styled-components";

export const CartCoffeeCardContainer = styled.div`
    padding: 24px 4px 24px;
    background-color: ${props => props.theme['base-card']};
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    border-bottom: 1px solid ${props => props.theme['base-button']};

    &:first-child{
        padding: 8px 4px 24px;
    }

    img{
        width: 64px;
        height: 64px;
        margin-right: 20px;
    }

    h3{
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: ${props => props.theme['base-subtitle']};

        margin-bottom: 8px;
    }

    .coffeeData{
        display: flex;

        .actions{
            display: flex;
            gap: 8px;

            .counter{
                display: flex;
                align-items: center;
                gap: 4px;
                padding: 8px;
                border-radius: 6px;

                background-color: ${props => props.theme['base-button']};
                
                button{
                    background: transparent;
                    border: none;

                    display: flex;
                    align-items: center;

                    cursor: pointer;
                    
                    &:hover{
                        svg{
                            fill: ${props => props.theme['purple-dark']};
                        }
                    }
                }

                input{
                    width: 20px;
                    height: 20px;

                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 130%; /* 20.8px */
                    color: ${props => props.theme['base-title']};
                    text-align: center;

                    background-color: transparent;
                    border: none;
                }
            }

            .exclude{
                display: flex;
                align-items: center;
                gap: 4px;
                padding: 8px;
                border-radius: 6px;

                background-color: ${props => props.theme['base-button']};
                border: none;

                text-transform: uppercase;
                font-size: 12px;
                color: ${props => props.theme['base-text']};

                cursor: pointer;
                svg{
                    flex-shrink: 0;
                }
            }
        }
    }
        
    .price{
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 130%; /* 18.2px */
        color: ${props => props.theme['base-text']};

        display: flex;
        align-items: flex-end;
        gap: 4px;
    }  
`