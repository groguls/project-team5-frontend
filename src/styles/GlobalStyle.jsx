import styled, { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  }

body {
  font-family: 'Roboto', sans-serif;
  }

button {
  font-family: 'Roboto', sans-serif;
}
  
ul, 
ol {
    list-style: none;
  }

img {
    display: block;
    max-width: 100%;
    height: auto;
  }

a {
    text-decoration: none;
    color: inherit;
  }  
`;

export const Container = styled.div`
  max-width: 320px;
  /* padding-left: 20px;
  padding-right: 20px; */
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    /* padding-left: 32px;
    padding-right: 32px; */
  }

  @media screen and (min-width: 1440px) {
    min-width: 1440px;
    max-width: 100%;
    height: calc(100vh - 85px);
    /* padding-left: 112px;
    padding-right: 112px; */
  }
`;
