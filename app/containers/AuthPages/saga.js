import { take, call, put, takeLatest, fork, all } from "redux-saga/effects";
import { SUBMIT, FORM_TYPE_LOGIN, FORM_TYPE_REGISTER } from "./constants";
import { submitFormAuthPage } from "../../services/auth.services.js";
import { setUserInfo } from "../Page/actions";
import auth from "../../utils/auth";
import { forwardTo } from "../../utils/history";

// Individual exports for testing

export function* submitForm(action) {
  try {
    const response = yield call(
      submitFormAuthPage,
      action.formType,
      action.data
    );

    switch (action.formType) {
      case FORM_TYPE_LOGIN:
        action.callbackSuccess(response);

        yield all([call(auth.setUserInfo, response.data)]);
        yield put(setUserInfo(response.data));
        yield call(forwardTo, "/");
        break;

      default:
        break;
    }
  } catch (error) {
    action.callbackError({
      message: error.message
    });
  }
}

export default function* authPagesSaga() {
  yield takeLatest(SUBMIT, submitForm);
  // yield fork(takeLatest, SUBMIT, submitForm);
}
