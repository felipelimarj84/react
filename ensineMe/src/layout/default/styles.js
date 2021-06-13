import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 100vh;
  flex-direction: column;
  grid-template-columns: 23vw 77vw;
  grid-template-rows: 13vh auto 13vh;
  overflow-x: hidden;

  .aside {
    border-right: 2px solid ${({ theme }) => theme.palette.neutral.light};
    grid-area: aside;
  }
  .header {
    border-bottom: 2px solid ${({ theme }) => theme.palette.neutral.light};
    grid-area: header;
  }
  .main {
    background-color: ${({ theme }) => theme.palette.primary.secondary};
    grid-area: main;
    overflow-y: scroll;
  }
  .footer {
    background-color: ${({ theme }) => theme.palette.primary.main};
    grid-area: footer;
  }

  grid-template-areas:
    "aside header"
    "aside main"
    "footer footer";
`;
