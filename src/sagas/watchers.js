import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga } from './authenticationSaga';
import { newSaga } from './admin/newSaga';
import { list } from './admin/listSaga';
import { profile, updateProfile } from './admin/profileSaga';
import { projects } from './employees/projectsSaga';
import { create } from './employees/createSaga';

import * as types from '../actions';


export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.ON_SAVE_NEW_EMPLOYEE, newSaga);
  yield takeLatest(types.FETCH_EMPLOYEES_LIST, list);
  yield takeLatest(types.FETCH_ADMIN_PROFILE, profile);
  yield takeLatest(types.UPDATE_ADMIN_PROFILE, updateProfile);
  yield takeLatest(types.FETCH_PROJECTS_LIST, projects);
  yield takeLatest(types.CREATE_PROJECT, create);
}