import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    box-sizing: border-box;
  }

  html, body, #root{
    width: 100vw;
    height: 100vh;
    font-size: 62.5%;
  }
  button {
    border: none;
    outline: none;
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
  }
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border: 0.5px solid ${({ theme }) => theme.palette.neutral.light};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.palette.primary.main};
  }
`;

export default GlobalStyle;
