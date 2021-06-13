import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;

  div.items {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 8px;
    margin-left: 70px;
    cursor: pointer;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    width: 205px;
    height: 35px;
    border-radius: 16px;
    color: ${({ theme }) => theme.palette.secondary.main};

    &.active {
      background-color: ${({ theme }) => theme.palette.secondary.light};
      font-weight: bold;
    }

    :hover {
      background-color: ${({ theme }) => theme.palette.secondary.light};
      font-weight: bold;
    }

    div.title {
      display: flex;
      flex-direction: row;
      flex-grow: 1;
      margin-left: 20px;
    }
  }
`;
