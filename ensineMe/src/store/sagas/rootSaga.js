import { takeLatest} from "redux-saga/effects";
import { handleLogin } from "./handlers/usuarios";
import { USER_SIGN_IN } from "../modules/auth";
import { handleLevelDificult, handleLevelDificultsReports } from "./handlers/nivelDificuldade";
import { NIVELDIFICULDADE_GET_ALL , NIVELDIFICULDADE_GET_REPORT } from "../modules/nivelDificuldade";
import { handleClients, handleClientsReports } from "./handlers/clientes";
import { CLIENTES_GET_ALL, CLIENTES_GET_REPORT } from "../modules/clientes";
import { handleCuradoria, handleCuradoriaReports } from "./handlers/curadoria";
import { CURADORIA_GET_ALL, CURADORIA_GET_REPORT } from "../modules/curadoria";
import { handleObjectType, handleObjectTypeReports } from "./handlers/tipoObjeto";
import { TIPOOBJETO_GET_ALL, TIPOOBJETO_GET_REPORT } from "../modules/tipoObjeto";

export function* watcherSaga() {
  yield takeLatest(USER_SIGN_IN, handleLogin);
  yield takeLatest(NIVELDIFICULDADE_GET_ALL, handleLevelDificult);
  yield takeLatest(NIVELDIFICULDADE_GET_REPORT, handleLevelDificultsReports);
  yield takeLatest(CLIENTES_GET_ALL, handleClients);
  yield takeLatest(CLIENTES_GET_REPORT, handleClientsReports);
  yield takeLatest(CURADORIA_GET_ALL, handleCuradoria);
  yield takeLatest(CURADORIA_GET_REPORT, handleCuradoriaReports);
  yield takeLatest(TIPOOBJETO_GET_ALL, handleObjectType);
  yield takeLatest(TIPOOBJETO_GET_REPORT, handleObjectTypeReports);
}
