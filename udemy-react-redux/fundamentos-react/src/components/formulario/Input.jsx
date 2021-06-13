import React, { useState } from "react";
import "./Input.css";

const Input = () => {
  const [valor, setValor] = useState("Inicial");

  const quandoMudar = (e) => {
    setValor(e.target.value);
  };

  return (
    <div className="input">
      <h2>{valor}</h2>
      <input value={valor} onChange={quandoMudar} />
      <input value={valor} readOnly />
      <input value={undefined} />
    </div>
  );
};

export default Input;
