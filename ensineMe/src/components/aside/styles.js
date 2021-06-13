import styled from "styled-components";
import logo from "../../assets/img/logo.png";
import geometric from "../../assets/img/geometric.png";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.palette.neutral.medium};
  height: 100%;
  font-size: 5rem;

  div.info {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 25%;
    position: relative;

    div.geometric {
      background-image: url(${geometric});
      background-position: center;
      background-repeat: no-repeat;
      width: 20%;
      height: 117px;
      background-size: 61px 117px;
    }
    div.logo {
      background-image: url(${logo});
      background-position: center;
      background-repeat: no-repeat;
      background-size: 176px 24px;
      width: 80%;
    }
  }
`;
