import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga } from './authenticationSaga';
import { newSaga } from './admin/new';
import { listSaga } from './admin/list';

import * as types from '../actions';


export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.ON_SAVE_NEW_EMPLOYEE, newSaga);
  yield takeLatest(types.FETCH_EMPLOYEES_LIST, listSaga);
}