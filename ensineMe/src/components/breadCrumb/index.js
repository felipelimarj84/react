import React from "react";
import * as S from "./styles";


  const BreadCrumb = ({ pathName }) => {
    console.log(pathName)
  return (
    
    <S.Container>
      <div class="breadCrumb">
        Home / {pathName}
      </div>
    </S.Container>
  );
  }

export default BreadCrumb;
