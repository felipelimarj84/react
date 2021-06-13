import React from "react";
import * as S from "./styles";
import Button from "../button";
import PropTypes from "prop-types";

/**
 *
 * @typedef PropTypes
 *
 * @property {array} info
 * - Array retornado pela API.
 *
 * @property {function} callback
 * - Função de callback para retorno dos botões.
 *
 * @property {string} size
 * - String referente a largura das colunas.
 * - Padrão esperado de 'fr' para o css grid.
 * - Deve ter a quandtidade de fr's baseada no numero de colunas.
 * - Ex: "1fr 1fr 1fr 1fr".
 *
 * @property {[{nome: string, ref: string, buttons: [{title: string, color: string, size: number }]}]} header
 * - Array de objetos que determina o título da coluna e as ações.
 * - Ref, obrigatoriamente deve estar em info.
 */

/**
 * Componente que gera a tabela de informações e ações.
 *
 *  @visibleName Lista Padrão
 *  @since 2021/05/05
 *  @version 1.0.1
 *  @author [Cícero Domenech] <[cicero.mello.ter@estacio.br]>
 *
 *  @param {PropTypes} props
 */

const ListTable = ({ size, header, info, callback }) => {
  return (
    <S.Container size={size} amount={header.length}>
      <div className="info-container">
        <div className="grid-container title-item">
          {header?.map((item, key) => {
            return <p key={String(key)}>{item.nome}</p>;
          })}
        </div>
        {info?.map((item, index) => {
          return (
            <div key={String(index)} className="grid-container item-list">
              {header?.map((item2, index2) => {
                return (
                  <div className="item" key={String(index2)}>
                    <p>{item[item2.ref]}</p>
                    <div className="button-container">
                      {item2.buttons?.map((item3, index3) => {
                        return (
                          <Button
                            action={() => callback(item, item3.title)}
                            key={String(index3)}
                            title={item3.title}
                            color={item3.color}
                            size={item3.size}
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </S.Container>
  );
};

const infoShape = {
  anyName: PropTypes.string,
};

const headerShape = {
  name: PropTypes.string,
  ref: PropTypes.string, // corresponde ao anyName
};

ListTable.propTypes = {
  size: PropTypes.string,
  header: PropTypes.arrayOf(PropTypes.shape(headerShape)).isRequired,
  info: PropTypes.arrayOf(PropTypes.shape(infoShape)).isRequired,
  callback: PropTypes.func,
};

export default ListTable;
