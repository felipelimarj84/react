import React from "react";
import produtos from "../../data/produtos";
import "./TabelaProdutos.css";

export const ListaAluno = () => {
  const produtosTr = produtos.map((prod, i) => {
    return (
      <tr key={prod.id} className={i % 2 === 0 ? "par" : "impar"}>
        <td>{prod.id}</td>
        <td>{prod.nome}</td>
        <td>{prod.price.toFixed(2).replace(".", ",")}</td>
      </tr>
    );
  });
  return (
    <div className="tabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{produtosTr}</tbody>
      </table>
    </div>
  );
};

export default ListaAluno;
