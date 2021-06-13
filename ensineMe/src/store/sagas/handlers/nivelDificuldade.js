import { call, put } from "redux-saga/effects";
import { setData , setReports} from "../../modules/nivelDificuldade";
import { nivelDificuldade } from "../../../services/nivelDificuldade";
// import { nivelDificuldades } from "../../../services/relatorioTema"

export function* handleLevelDificult(action) {
  try {
    const response = yield call(() =>
    nivelDificuldade.find()
    );
    const { data } = response;
    yield put(setData(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleLevelDificultsReports(action) {
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