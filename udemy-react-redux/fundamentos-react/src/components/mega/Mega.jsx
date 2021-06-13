import React, { useState } from "react";
import "./Mega.css";

const Mega = (props) => {
  function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;

    return array.includes(aleatorio)
      ? gerarNumeroNaoContido(min, max, array)
      : aleatorio;
  }

  function geraNumeros(qtde) {
    const numeros = Array(qtde)
      .fill(0)
      .reduce((nums) => {
        const novoNumero = gerarNumeroNaoContido(1, 60, nums);
        return [...nums, novoNumero];
      }, [])
      .sort((n1, n2) => n1 - n2);
    return numeros;
  }

  const [qtde, setQtde] = useState(props.qtde || 6);
  const numerosIniciais = geraNumeros(qtde);
  const [numeros, setNumeros] = useState(numerosIniciais);

  return (
    <div className="mega">
      <h2>Jogo da Mega</h2>
      <h3>{numeros.join(" ")}</h3>
      <div>
        <label>Quantidade de Números</label>
        <input
          min="6"
          max="15"
          type="number"
          value={qtde}
          onChange={(e) => {
            setQtde(+e.target.value);
            setNumeros(geraNumeros(+e.target.value));
          }}
        ></input>
      </div>
      <button onClick={(_) => setNumeros(geraNumeros(qtde))}>
        Gerar Números
      </button>
    </div>
  );
};

export default Mega;
