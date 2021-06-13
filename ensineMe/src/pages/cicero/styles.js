import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  gap:10px;
  background-color: ${({theme}) => theme.palette.primary.main};

 .teste{
     background-color: ${({color})=> color ? "green" : "red" };

     :hover{
         opacity: 0.8;
     }
 }
`;
