import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export const IndiretaPai = () => {
  const [nome, setNome] = useState("?");
  const [idade, setIdade] = useState(0);
  const [nerd, setNerd] = useState(false);

  const fornecerInfo = (nome, idade, nerd) => {
    setNome(nome);
    setIdade(idade);
    setNerd(nerd);
  };

  return (
    <div>
      <div>Pai</div>
      <p>
        {nome} - {idade} - {nerd ? "V" : "F"}
      </p>
      <IndiretaFilho quandoClicar={fornecerInfo}></IndiretaFilho>
    </div>
  );
};

export default IndiretaPai;
