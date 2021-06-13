import React from "react";

const Aleatorio = (props) => {
  const { min, max } = props;
  const aleatorio = parseInt(Math.random() * (props.max - props.min) + min);

  return (
    <div>
      <h2>Valor aleatório</h2>
      <p>Mínimo {min}</p>
      <p>Mánimo {max}</p>
      <p>Escolhido {aleatorio}</p>
    </div>
  );
};

export default Aleatorio;
