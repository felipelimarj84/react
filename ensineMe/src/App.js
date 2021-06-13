import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

import Teste from "./pages/teste";
import Auth from "./pages/auth";
import Cicero from "./pages/cicero";
import NivelDificuldade from "./pages/nivelDificuldade";
import Curadoria from "./pages/curadoria";
import Tipos from "./pages/tipos";
import Usuarios from "./pages/usuarios";
import Objetos from "./pages/objetos";
import TiposQuestao from "./pages/tiposQuestao";
import Questoes from "./pages/questoes";
import Clientes from "./pages/clientes";

import { store } from "./store";


export default function App() {
  const token = useSelector((state) => state.auth.token);
  axios.defaults.baseURL = process.env.REACT_APP_ROOT_API;
  axios.defaults.headers.common["Content-Type"] =
    "application/x-www-form-urlencoded";

  if (token) {
    axios.defaults.headers["temas-token"] = token;
    axios.defaults.headers["repov4-token"] = token;
  }

  if (window.Cypress) {
    window.store = store
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={withRouter(Auth)} />
        <Route exact path="/teste" component={withRouter(Teste)} />
        <Route exact path="/cicero" component={withRouter(Cicero)} />
        
        <Route exact path="/usuarios" component={withRouter(Usuarios)} />
        <Route exact path="/objetos" component={withRouter(Objetos)} />
        <Route exact path="/tipos" component={withRouter(Tipos)} />
        <Route exact path="/curadoria" component={withRouter(Curadoria)} />
        <Route exact path="/nivelDificuldade" component={withRouter(NivelDificuldade)} />
        <Route exact path="/tiposQuestao" component={withRouter(TiposQuestao)} />
        <Route exact path="/questoes" component={withRouter(Questoes)} />
        <Route exact path="/clientes" component={withRouter(Clientes)} />
       
      </Switch>
    </Router>
  );
}