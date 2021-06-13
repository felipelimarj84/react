import styled from "styled-components";

export const Container = styled.button`
  padding: ${({ size }) => (size ? size : "10")}px;
  border-radius: 5px;
  font-size: ${({ size }) => (size ? size / 4  : "2.5")}rem;
  background-color: ${({ color, theme }) =>
    color ? color : theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.neutral.light};
`;
