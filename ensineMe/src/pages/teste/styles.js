import styled from 'styled-components';
import logo from '../../assets/img/logo.png'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background-color: ${({ theme }) => theme.palette.neutral.lightest};
  color: ${({ theme }) => theme.palette.neutral.medium};
  /* height: 200vh;  não pode ter altura */
  font-size: 1.4rem;

  div.logo {
    background-image: url(${logo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 400px;
    height: 200px;
  }

  p{
      font-size: 3rem;
  }

  div.button-container{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 10px;
  }

`;
