import { call, put } from "redux-saga/effects";
import { setData , setReports} from "../../modules/curadoria";
import { curadoria } from "../../../services/curadoria";
// import { curadorias } from "../../../services/relatorioTema"

export function* handleCuradoria(action) {
  try {
    const response = yield call(() =>
    curadoria.find()
    );
    const { data } = response;
    yield put(setData(data));
  } catch (error) {
    console.log(error,'erro');
  }
}

export function* handleCuradoriaReports(action) {
  try {
    //const response = yield call(() =>
   // nivelDificuldades.find() 
   // );
    const response = '';
    const { data } = response;
    yield put(setReports(data));
  } catch (error) {
    console.log(error);
  }
}