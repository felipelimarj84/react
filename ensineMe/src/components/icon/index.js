import React, { createElement } from "react";
import * as S from "./styles";
import * as FeatherIcons from "react-icons/fi";
import PropTypes from "prop-types";

/**
 *
 * @typedef PropTypes
 *
 * @property {string} name 
 * - String referente ao nome dos ícones da lib 'Feather' do react-icons
 * - Url para pesquisa: https://react-icons.github.io/react-icons/icons?name=fi
 *
 * @property {number} size
 * - Número referente ao tamanho da fonte para mudar o tamanho do ícone
 * 
 * @property {string} color
 * - String referente a nome da cor a ser utilizada no ícone, podendo utilizar a paleta de cores padrão do sistema
 * - Ex.: {theme.palette.secondary.main}
 */

/**
 * Componente que gera o ícone padrão para uso no sistema
 *
 *  @visibleName Ícone Padrão
 *  @since 2021/05/07
 *  @version 1.0 - Criação do componente
 *  @author [Felipe Lima] <[felipe.almeida.ter@estacio.br]>
 *
 *  @param {PropTypes} props
 */

const Icon = ({ name, size, color }) => {

  const createIcon = createElement(FeatherIcons[name]);

  return (
    <S.Container size={size} color={color}>
      {createIcon}
    </S.Container>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string
};

export default Icon;
