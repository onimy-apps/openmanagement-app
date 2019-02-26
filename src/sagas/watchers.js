import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga } from './authenticationSaga';
import { newSaga } from './admin/newSaga';
import { list } from './admin/listSaga';
import { profile } from './admin/profileSaga';

import * as types from '../actions';


export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.ON_SAVE_NEW_EMPLOYEE, newSaga);
  yield takeLatest(types.FETCH_EMPLOYEES_LIST, list);
  yield takeLatest(types.FETCH_ADMIN_PROFILE, profile);
}