import { take, call, put, select, takeLatest, fork } from 'redux-saga/effects';
import { SUBMIT } from './constants';

// Individual exports for testing


export function* submitForm(action ) {
  try {
    console.log('action', action);
  } catch (error) {
    console.log('error', error);
  }

}
export default function* authPagesSaga() {
  yield takeLatest(SUBMIT, submitForm);

}
