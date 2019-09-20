import { call, delay, put, takeLatest } from "redux-saga/effects";

import { signIn } from "./../services/authService";

//import { signIn } from "./../store/actions/singInActions";

function* signInAsync(creds) {
  yield call(signIn, creds);
  yield delay(2000);
  yield put({
    type: "LOGIN_SUCCESS_ASYNC",
    payload: creds
  });
}

export function* watchSignIn() {
  yield takeLatest("LOGIN_SUCCESS", signInAsync);
}
