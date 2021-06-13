import React from "react";

export const DiretaFilho = (props) => {
  return (
    <div>
      <p>{props.nome}</p>
      <p>{props.idade}</p>
      <p>{props.nerd ? "V" : "F"}</p>
    </div>
  );
};

export default DiretaFilho;
