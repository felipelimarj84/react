import { call, put } from "redux-saga/effects";
import { setUser } from "../../modules/auth";
import { usuarios } from "../../../services/usuarios";

export function* handleLogin(action) {
  try {
    const response = yield call(() => usuarios.login(action.payload));
    const { data } = response;
    yield put(setUser(data.token));
  } catch (error) {
    console.log(error);
  }
}
