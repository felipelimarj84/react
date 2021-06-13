import styled from "styled-components";

export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    background-color: #fff;
    color: #000;
    width: 366px;
    height: 313px;
    border-radius: 5px;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .close {
    background-color: transparent;
    border: none;
    outline: none;
    width: 32px;
    height: 32px;
    right: calc(-100% + 64px);
    cursor: pointer;
    top: 16px;
    display: flex;
    position: relative;
    align-items: center;
    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 2.5px;
      height: 24px;
      background-color: #000;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
`;
