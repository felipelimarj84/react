import React, { useEffect } from "react";
import DefaultLayout from "../../layout/default";
import { getLevelDificult } from "../../store/modules/nivelDificuldade";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ListTable from "../../components/listTable";
import BreadCrumb from "../../components/breadCrumb";

function NivelDificuldade() {
  /**@type {string}*/
  const token = useSelector((state) => state.auth.token);

  /**@type {array}*/
  const nivelDificuldade = useSelector((state) => state.nivelDificuldade.data);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getLevelDificult());
  }, [dispatch]);

  useEffect(() => {
    if (!token) {
      history.push("/");
    }
  }, [token, history]);

  /** Acionada pelo callback do componente ListTable
   * @param {Object} value
   * @param {string} info
   *
   * @return {boolean}
   */
  const handleAction = (value, info) => {
    console.log(value, info);
  };

  return (
    <div>
      <div className={"breadCrumb"}>
        <BreadCrumb  pathName={"Nível Dificuldade"} />
      </div>
      {nivelDificuldade && (
        <>
          <ListTable
            info={nivelDificuldade}
            callback={handleAction}
            size={"2fr 1fr 1fr 0.5fr"}
            header={[
              { nome: "Identificador", ref: "id" },
              { nome: "Descrição", ref: "descricao" },
              {
                nome: "Ações",
                ref: "acoes",
                buttons: [
                  { title: "", color: "red", size: 10 },
                  { title: "", color: "blue", size: 10 },
                ],
              },
            ]}
          />
        </>
      )}
    </div>
  );
}

export default DefaultLayout(NivelDificuldade);