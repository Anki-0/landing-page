import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`



*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
 cursor: none;
  outline: none;
}

html{
    box-sizing: border-box;
    font-size: 16px;
}

body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${({ theme }) => theme.background};
    overscroll-behavior: none;
    overflow-x: hidden;
}
a{
    text-decoration: none;
}
`;
