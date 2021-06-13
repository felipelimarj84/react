import React from "react";
import If, { Else } from "../conditional/If";

export const UsuarioInfo = (props) => {
  const usuario = props.usuario || {};
  return (
    <div>
      <If test={usuario && usuario.nome}>
        <p>Bem vindo {usuario.nome}</p>
        <Else>
          <p>Bem vindo Amigão</p>
        </Else>
      </If>
    </div>
  );
};

export default UsuarioInfo;
