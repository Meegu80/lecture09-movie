import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        background-color: #f6f8fa;
        color: #222;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyle;
