import React from "react";
import * as S from "./styles";
import { useHistory, useLocation } from "react-router-dom";
import Icon from "../icon";
import theme from "../../theme";

/**
 * Componente que gera o menu padrão para uso no sistema
 * - Possui uma constante onde são passados os itens a serem exibidos no menu
 * - A constante possui os atributos title, icon e router
 * - title: título do item no menu
 * - icon: nome do ícone a ser exibido junto ao title (https://react-icons.github.io/react-icons/icons?name=fi)
 * - router: nome da página que será redirecionado o item ao ser clicado
 *
 *  @visibleName Menu Padrão
 *  @since 2021/05/05
 *  @version 1.0 - Criação do componente
 *  @version 1.0.1 - Adicionado marcação para item do menu selecionado
 *  @author [Felipe Lima] <[felipe.almeida.ter@estacio.br]>
 *
 */

const Menu = () => {
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;

  const getClassRouter = (itemRouter) => {
    let classReturn = "";
    const route = "/" + pathname.split("/")[1];

    // colocado para indicar a home - nesse caso é /teste mas poderia ser outra
    if (itemRouter === "/") itemRouter = "/teste";

    route === itemRouter ? (classReturn = "items active") : (classReturn = "items");
    return classReturn;
  };

  const itemsMenu = [
    { title: "Home", icon: "FiHome", router: "/" },
    { title: "Usuários", icon: "FiUsers", router: "/usuarios" },
    { title: "Objetos", icon: "FiBox", router: "/objetos" },
    { title: "Tipos de objeto", icon: "FiLayers", router: "/tipos" },
    { title: "Curadorias", icon: "FiClipboard", router: "/curadoria" },
    {
      title: "Nível de dificuldade",
      icon: "FiCornerRightUp",
      router: "/nivelDificuldade",
    },
    { title: "Tipos de questões", icon: "FiFileText", router: "/tiposQuestao" },
    { title: "Questões", icon: "FiFile", router: "/questoes" },
    { title: "Clientes", icon: "FiBriefcase", router: "/clientes" },
    // { title: "Cicero", icon: "FiActivity", router: "/cicero" },
  ];

  return (
    <S.Container>
      <>
        {itemsMenu.map((item, index) => {
          return (
            <div
              key={String(index)}
              className={getClassRouter(item.router)}
              onClick={() => history.push(item.router)}
            >
              <Icon
                name={item.icon}
                size={18}
                color={theme.palette.secondary.main}
              />
              <div className="title">{item.title}</div>
            </div>
          );
        })}
      </>
    </S.Container>
  );
};

export default Menu;
