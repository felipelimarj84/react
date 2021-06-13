import React from "react";

export const IndiretaFilho = (props) => {
  const gerarIdade = () => {
    return parseInt(Math.random() * 20) + 50;
  };
  const gerarNerd = () => {
    return Math.random() > 0.5;
  };

  return (
    <div>
      <div>Filho</div>
      <button
        onClick={(e) => props.quandoClicar("Felipe", gerarIdade, gerarNerd)}
      >
        Info
      </button>
    </div>
  );
};

export default IndiretaFilho;
