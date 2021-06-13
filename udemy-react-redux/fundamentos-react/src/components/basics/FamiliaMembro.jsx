import React from "react";

export const FamiliaMembro = (props) => {
  return (
    <div>
      <p>
        {props.nome} {props.sobrenome}
      </p>
    </div>
  );
};

export default FamiliaMembro;
