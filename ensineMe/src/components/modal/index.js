import React from "react";

import * as S from "./styles";
import PropTypes from "prop-types";

/**
 *
 * @typedef PropTypes
 *
 * @property {function} onClose
 * - Função de callback para fechar modal.
 */

/**
 * Componente de modal que recebe children
 *
 * @visibleName Modal
 * @since 2021/05/10
 * @version 1.0.1
 * @author [Kleiton Albuquerque] <[kleiton.silvar.ter@estacio.br]>
 *
 * @param {PropTypes} props
 */

const Modal = ({ onClose = () => {}, children }) => {
  const id = "modal";
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  return (
    <S.Modal id={id} onClick={(e) => handleOutsideClick(e)}>
      <div className="container">
        <button className="close" onClick={onClose} />
        <div className="content">{children}</div>
      </div>
    </S.Modal>
  );
};

Modal.protoTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
