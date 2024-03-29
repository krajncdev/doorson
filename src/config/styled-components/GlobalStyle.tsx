import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
    }

    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        font-family: "Roboto", sans-serif;
        color: ${(props) => props.theme.colors.text};
    }

    img,
    picture,
    video,
    canvas,
    svg {
        display: block;
        max-width: 100%;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    td,
    tr,
    th,
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
    }

    #root,
    #__next {
        isolation: isolate;
    }

    button {
        outline: none;
        background-color: transparent;
        cursor: pointer;
        border: none;
    }
    a {
        text-decoration: none;
    }
    a:visited {
        color: inherit;
    }




`;
