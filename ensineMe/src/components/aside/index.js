import React from "react";
import * as S from "./styles";
import Menu from "../menu";

export default function Aside() {
  return (
    <S.Container>
      <div className="info">
        <div className="geometric" />
        <div className="logo" />
      </div>
      <Menu />
    </S.Container>
  );
}
