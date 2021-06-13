import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;

  ${({ size }) => {
    if (size) {
      return css`
        font-size: ${({ size }) => size}px;
      `;
    } else {
      return css`
        font-size: 18px;
      `;
    }
  }}

  ${({ color }) => {
    if (color) {
      return css`
        color: ${({ color }) => color};
      `;
    } else {
      return css`
        color: ${({ theme }) => theme.palette.secondary.main};
      `;
    }
  }}
`;
