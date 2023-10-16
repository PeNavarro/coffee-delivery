import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
    padding: 112px 20px 20px;
    background-color: ${props => props.theme['base-card']};
    text-align: center;
    position: relative;
    border-radius: 6px 36px;

    img{
        position: absolute;
        top: -20px;
        transform: translateX(-50%);
        left: 50%;
        width: 120px;
        height: 120px;
    }

    .categories{
        display: flex;
        gap: 4px;
        justify-content: center;
        align-items: center;

        span{
            padding: 4px 8px;
            background-color: ${props => props.theme['yellow-light']};
            border-radius: 100px;
            margin-bottom: 16px;

            color: ${props => props.theme['yellow-dark']};
            font-size: 10px;
            font-style: normal;
            font-weight: 700;
            line-height: 130%; /* 13px */
            text-transform: uppercase;
        }
    }

    h3{
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 130%; /* 26px */
        color: ${props => props.theme['base-subtitle']};

        margin-bottom: 8px;
    }

    .description{
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 18.2px */
        color: ${props => props.theme['base-label']};
        margin-bottom: 33px;
    }

    .buy{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .price{
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 130%; /* 18.2px */
            color: ${props => props.theme['base-text']};

            display: flex;
            align-items: flex-end;
            gap: 4px;

            span{
                font-family: 'Baloo 2', sans-serif;
                font-size: 24px;
                font-style: normal;
                font-weight: 800;
            }
        }  

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

            .cartButton{
                padding: 8px;
                background-color: ${props => props.theme['purple-dark']};
                border: none;

                border-radius: 6px;

                display: flex;
                align-items: center;

                cursor: pointer;
            }
        }
    }
`