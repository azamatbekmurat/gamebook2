import { delay } from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";

function* signInAsync() {
  yield delay(4000);
  yield put({ type: "LOGIN_SUCCES_ASYNC", value: 1 });
}

export function* watchAgeUp() {
  yield takeEvery("LOGIN_SUCCESS", signInAsync);
}
