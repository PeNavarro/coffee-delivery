import styled from "styled-components";

export const SuccessContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    
    h2{
        font-size: 32px;
        font-style: normal;
        font-weight: 800;
        margin-top: 80px;
        color: ${props => props.theme['yellow-dark']}
    }

    p{
        font-size: 20px;
        color: ${props => props.theme['base-subtitle']}
    }
`

export const OrderConclusion = styled.div`
    margin-top: 40px;
    padding: 40px 132px 40px 40px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    border-radius: 6px 36px;
    border: 1px solid ${props => props.theme['yellow']};
    width: fit-content;

    .info{
        display: flex;
        gap: 12px;
        align-items: center;

        p{
            font-size: 16px;
            color: ${props => props.theme['base-text']};
        }

        svg{
            flex-shrink: 0;
        }
    }
`