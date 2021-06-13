import React, { useEffect } from "react";
import * as S from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { getCuradoria } from "../../store/modules/curadoria";
import DefaultLayout from "../../layout/default";
import Button from "../../components/button";
import { useHistory } from "react-router-dom"

function Teste() {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.exemplo.data);
  const token = useSelector((state) => state.auth.token);
  const history = useHistory()
  const curadoriaState = useSelector((state) => state.curadoria.data);
 
  // useEffect(() => {
  //   console.log(info, curadoriaState, authToken);
  // }, [info, curadoriaState, authToken]);

  useEffect(() => {
    if (!token) {
      history.push("/");
    }
  }, [token, history]);

  /** Função de teste
   * @param {string} value
   */
  const testeFunc = (value) => {
    if (value === "add") {
      dispatch({ type: "EXEMPLO_UPDATE", payload: info + 1 });
    }
    if (value === "remove") {
      dispatch({ type: "EXEMPLO_UPDATE", payload: info - 1 });
    }
  };

  return (
    <S.Container>
      <div className="logo" />
      <p>Em construção</p>
      <p id="info">{info}</p>
      <div className="button-container">
        <Button
          color={"red"}
          size={10}
          action={() => testeFunc("add")}
          title={"Adicionar"}
        />
        <Button action={() => testeFunc("remove")} title={"Remover"} />
        <Button
          action={() => dispatch(getCuradoria())}
          title={"Curadoria"}
        />
      </div>
      <div id="curadoria">

        <br />
        {curadoriaState
          ? curadoriaState.map((item, index) => {
              return <p key={String(index)}>{item.nome}</p>;
            })
          : null}
      </div>
      <div>
        <br />
      </div>
    </S.Container>
  );
}
export default DefaultLayout(Teste);
