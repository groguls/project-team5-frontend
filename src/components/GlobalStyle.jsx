import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
  margin: 0;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img{
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
