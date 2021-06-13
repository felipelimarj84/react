import styled, {css} from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  font-size: 2rem;
  padding: 10px;

  .info-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 15px;

    .grid-container {
      display: grid;
      width: 100%;
     
     ${({size}) => {
       if(size){
         return css `
         grid-template-columns: ${({size}) => size};
         `
       }else{
        return css `
         grid-template-columns: ${({amount}) => `repeat(${amount}, 1fr)`} ;
         `
       }
     }}
      
    }
    .title-item {
      border-bottom: 2px solid #ddd;
      padding: 5px;
    }
    .item-list {
      border-bottom: 1px solid #ddd;
      padding: 5px;
      font-size: 1.8rem;

      .item {
        font-size: 1.8rem;

        .button-container {
          display: flex;
          align-items: center;
          gap: 15px;
        }
      }
    }
  }
`;
