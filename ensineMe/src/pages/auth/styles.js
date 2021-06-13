import styled from "styled-components";
import logo from "../../assets/img/logo.png";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background-color: ${({ theme }) => theme.palette.neutral.lighter};
  color: ${({ theme }) => theme.palette.neutral.medium};
  height: 100%;
  font-size: 5em;

  div.logo {
    background-image: url(${logo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 400px;
    height: 100px;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
    width: 400px;

    input {
      background-color: ${({ theme }) => theme.palette.neutral.lighter};
      padding: 10px;
      width: 100%;
    }

    button {
      padding: 10px;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.palette.primary.main};
      color: ${({ theme }) => theme.palette.neutral.light};
      width: 100%;
    }
  }
`;
