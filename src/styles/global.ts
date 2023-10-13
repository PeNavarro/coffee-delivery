import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Roboto:wght@400;700&display=swap');
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${(props) => props.theme['background']};
        font-family: 'Roboto', sans-serif;
    }

    #root{
        max-width: 1120px;
        margin: 0 auto;
    }

    h1, h2, h3, h4, h5, h6{
        font-family: 'Baloo 2', sans-serif;
    }
`