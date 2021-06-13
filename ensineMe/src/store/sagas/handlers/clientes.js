import { call, put } from "redux-saga/effects";
import { setData , setReports} from "../../modules/clientes";
import { clientes } from "../../../services/clientes";
import { clientess } from "../../../services/relatorioTema"

export function* handleClients(action) {
  try {
    const response = yield call(() =>
      clientes.find()
    );
    const { data } = response;
    yield put(setData(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleClientsReports(action) {
  try {
    const response = yield call(() =>
      clientess.find()
    );
    const { data } = response;
    yield put(setReports(data));
  } catch (error) {
    console.log(error);
  }
}