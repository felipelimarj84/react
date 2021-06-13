import React from "react";
import DiretaFilho from "./DiretaFilho";

export const DiretaPai = () => {
  return (
    <div>
      <DiretaFilho nome="Pedro" idade={4} nerd={true}></DiretaFilho>
    </div>
  );
};

export default DiretaPai;
