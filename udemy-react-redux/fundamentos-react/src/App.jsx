import React from "react";
import Primeiro from "./components/basics/Primeiro.jsx";
import ComParametro from "./components/basics/ComParametro.jsx";
import Fragmento from "./components/basics/Fragmento.jsx";
import Aleatorio from "./components/basics/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basics/Familia";
import FamiliaMembro from "./components/basics/FamiliaMembro";
import ListaAlunos from "./components/repeat/ListaAlunos";
import TabelaProdutos from "./components/repeat/TabelaProdutos";
import ParOuImpar from "./components/conditional/ParOuImpar";
import UsuarioInfo from "./components/conditional/UsuarioInfo";
import DiretaPai from "./components/comunication/DiretaPai";
import IndiretaPai from "./components/comunication/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>Fundamentos React</h1>
      <div className="cards">
        <Card titulo="#13 - Mega Sena" color="#6bee4b">
          <Mega qtde={6} />
        </Card>
        <Card titulo="#12 - Contador" color="#4cd1e2">
          <Contador numeroInicial={10} />
        </Card>
        <Card titulo="#11 - Componente Controlado" color="#d8a548">
          <Input />
        </Card>
        <Card titulo="#10 - Comunicação Indireta" color="#88946e">
          <IndiretaPai />
        </Card>
        <Card titulo="#09 - Comunicação Direta" color="#96cc18">
          <DiretaPai />
        </Card>
        <Card titulo="#08 - Renderização Condicional" color="#4bc09d">
          <ParOuImpar numero={20} />
          <UsuarioInfo usuario={{ nome: "Felipe" }}></UsuarioInfo>
          <UsuarioInfo usuario={{ email: "Felipe@lima.com.br" }}></UsuarioInfo>
        </Card>
        <Card titulo="#07 - Desafio Repetição" color="#3651aa">
          <TabelaProdutos />
        </Card>
        <Card titulo="#06 - Repetição" color="#AE1166">
          <ListaAlunos />
        </Card>
        <Card titulo="#05 - Componente com Filhos" color="#cfb824">
          <Familia sobrenome="Lima">
            <FamiliaMembro nome="Felipe"></FamiliaMembro>
            <FamiliaMembro nome="Lene"></FamiliaMembro>
            <FamiliaMembro nome="Pedro"></FamiliaMembro>
          </Familia>
        </Card>
        <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
          <Aleatorio min={10} max={60} />
        </Card>
        <Card titulo="#03 - Fragmento" color="#E94C6F">
          <Fragmento />
        </Card>
        <Card titulo="#02 - Com Parâmetro" color="#C1800E">
          <ComParametro
            titulo="Situação"
            aluno="Felipe"
            nota={9.4}
          ></ComParametro>
        </Card>
        <Card titulo="#01 - Primeiro Componente" color="#588C73">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
};

export default App;
