import { createGlobalStyle } from 'styled-components';
import novoBackground from './Background.png'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100%;
    }

    body {
        /* margin: 10px; */
        background-color: #7A7EA8;
        -webkit-font-smoothing: antialiased !important;
    }
`;
