import { call, put } from "redux-saga/effects";
import { setData , setReports} from "../../modules/tipoObjeto";
import { tipos } from "../../../services/tipos";


export function* handleObjectType(action) {
  try {
    const response = yield call(() =>
    tipos.find()
    );
    const { data } = response;
    yield put(setData(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleObjectTypeReports(action) {
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