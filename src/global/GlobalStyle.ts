import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


:root {
    /* Primary */
    --color-red: #FC4747;
    --color-dark-blue: #10141E;
    --color-greyish-blue: #5A698F;
    --color-semi-dark-blue: #161D2F;
    --color-white: #FFFFFF;
    --font-size-heading-l: 32px;
    --font-size-heading-m: 24px;
    --font-size-heading-s: 18px;
    --font-size-body-m: 15px;
    --font-size-body-s: 13px;

}

*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


*:focus,
*:active {
    -webkit-tap-highlight-color: transparent;
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Manrope";
}

body {
    font-size: var(--font-size-body);
    background-color: var(--color-dark-blue);
    font-family: 'Outfit';
    font-size: var(--font-size-body-m);
}


input,
button {
    outline: none;
}

a {
    text-decoration: none;
}

button,
svg {
    cursor: pointer;
}

:root {

    &::-webkit-scrollbar-track {
        background: var(-color-semi-dark-blue);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--color-red);
        border-radius: 20px;

    }

    &::-webkit-scrollbar {
        width: 11px;
    }
}

a {
    text-decoration: none;
}

p {

    font-size: var(--font-size-body-m);
}



h1,
h2 {
    font-family: 'Outfit';
    font-weight: 300;
}

h3 {
    font-weight: 600;
}


input, fieldset, button {
    border: unset;
    outline: unset;
}

`;
