import styled from "styled-components";

export const HomeContainer = styled.main`
    
`

export const Hero = styled.div`
    display: grid;
    grid-template-columns: 57% 43%;
    position: relative;

    padding: 92px 0;

    .heading{
        h1{
            font-size: 48px;
            font-style: normal;
            font-weight: 800;
            line-height: 130%;
            color: ${props => props.theme['base-title']};
        }
        
        p{
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 130%; /* 26px */
            margin-top: 16px;
            padding-right: 35px;
            color: ${props => props.theme['base-subtitle']};
        }   
    }

    .coffeImage{
        grid-row: span 2;
    }

    .advatages{
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        .advantage{
            display: flex;
            align-items: center;
            gap: 12px;

            .icon{
                flex-shrink: 0;
                padding: 10px;
                border-radius: 100%;
                
                display: flex;
                align-items: center;
            }

            &:first-child{
                .icon{
                    background-color: ${props => props.theme['yellow-dark']};
                }
            }

            &:nth-child(2){
                .icon{
                    background-color: ${props => props.theme['base-text']};
                }
            }

            &:nth-child(3){
                .icon{
                    background-color: ${props => props.theme['yellow']};
                }
            }

            &:last-child{
                .icon{
                    background-color: ${props => props.theme['purple']};
                }
            }

            p{
                font-size: 16px;
                line-height: 130%;
                color: ${props => props.theme['base-subtitle']};
            }
        }
    }
`

export const Background = styled.div`
    position: absolute;
    width: 100vw;
    height: 100%;
    left: calc((100vw - 1103px)/2*-1);
    z-index: -1;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        left: 0;
    }
`

export const CoffeList = styled.section`
    padding: 32px 0 157px;

    h2{
        font-size: 32px;
        font-style: normal;
        font-weight: 800;
        line-height: 130%; /* 41.6px */
        margin-bottom: 54px;
    }

    .coffeeGrid{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 32px;
        row-gap: 40px;
    }
`