import { combineReducers } from "redux";

import auth from "./auth";
import exemplo from "./exemplo";
import curadoria from "./curadoria";
import nivelDificuldade from "./nivelDificuldade";
import clientes from "./clientes"

export default combineReducers({
  auth,
  exemplo,
  clientes,
  curadoria,
  nivelDificuldade,
});
