import { take, call, put, select, takeLatest, fork } from "redux-saga/effects";
import { SUBMIT } from "./constants";
import { submitFormAuthPage } from "../../services/auth.services.js";

// Individual exports for testing

export function* submitForm(action) {
  try {
    const response = yield call( submitFormAuthPage, action.formType, action.data);
    console.log('response', response);

  } catch (error) {
    console.log("error: ", error);
  }
}

export default function* authPagesSaga() {
  yield takeLatest(SUBMIT, submitForm);
  // yield fork(takeLatest, SUBMIT, submitForm);
}
