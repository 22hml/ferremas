import { createGlobalStyle } from "styled-components";

export const color = {
    primary: '#e40414',
    secondary: '#0000fe',
    background: '#D6DBD2',
    text: '#2C363F',
    altertext: '#F2F5EA'
}

export const GlobalStyles = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
 margin: 0;
 padding: 0;
 border: 0;
 font-size: 100%;
 font: inherit;
 vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
 display: block;
}
body {
    font-family: 'Roboto', sans-serif;
    color: ${color.text};
    background-color: ${color.background};
    line-height: 1;

    button {
        font-family: 'Roboto', sans-serif;
    }

    select {
        font-family: 'Roboto', sans-serif;
    }

    input {
        font-family: 'Roboto', sans-serif;
    }
}
ol, ul {
 list-style: none;
}
blockquote, q {
 quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
 content: '';
 content: none;
}
table {
 border-collapse: collapse;
 border-spacing: 0;
}
`