import React from "react";
import alunos from "../../data/alunos";

export const ListaAluno = () => {
  const alunosLi = alunos.map((a) => {
    return (
      <li key={a.id}>
        {a.id}) {a.nome} - nota {a.nota}
      </li>
    );
  });
  return (
    <div>
      <ul style={{ listStyle: "none" }}>{alunosLi}</ul>
    </div>
  );
};

export default ListaAluno;
