import { take, call, put, select } from 'redux-saga/effects';
import auth from '../../utils/auth';
import { SET_USER_INFO } from "./constants";


export function* setUserInfo(action){
  try {

    yield put(auth.setUserInfo, action.data);

  } catch (error) {
    console.log('error');
  }
}
// Individual exports for testing
export default function* pageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SET_USER_INFO, setUserInfo);
}
