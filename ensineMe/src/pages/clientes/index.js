import React, { useEffect } from "react";
import DefaultLayout from "../../layout/default";
import { getClients } from "../../store/modules/clientes";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ListTable from "../../components/listTable";

function Clientes() {
  /**@type {string}*/
  const token = useSelector((state) => state.auth.token);

  /**@type {array}*/
  const clients = useSelector((state) => state.clientes.data);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getClients());
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
      {clients && (
        <>
          <ListTable
            info={clients}
            callback={handleAction}
            size={"2fr 1fr 1fr 0.5fr"}
            header={[
              { nome: "Identificador", ref: "id" },
              { nome: "Nome", ref: "nome" },
              { nome: "Responsável", ref: "instituicao" },
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

export default DefaultLayout(Clientes);
