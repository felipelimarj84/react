import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

/**
 *
 * @typedef PropTypes
 *
 * @property {string} title
 * - Label do botão.
 *
 * @property {function} action
 * - Função de callback para retorno.
 *
 * @property {number} size
 * - Tamanho do botão.
 * 
 * @property {string} color
 * - Cor do botão.
 */

/**
 * Componente de botão genérico.
 *
 *  @visibleName Botão Padrão
 *  @since 2021/05/02
 *  @version 1.0.1
 *  @author [Cícero Domenech] <[cicero.mello.ter@estacio.br]>
 * 
 *  @param {PropTypes} props
 */

const Button = ({ action, color, size, title }) => {
    
  return (
    <>
      <S.Container color={color} size={size} onClick={() => action()}>
        {title}
      </S.Container>
    </>
  );
}

Button.propTypes={
  title: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  action: PropTypes.func
}

export default Button;
