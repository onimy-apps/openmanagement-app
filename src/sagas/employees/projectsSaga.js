import { put, call } from 'redux-saga/effects';
import { projectsService } from '../../services/employees/projectsService';

import * as types from '../../actions'

export function* projects(payload) {
  try {
    const response = yield call(projectsService, payload);
    yield [
      put({ type: types.FETCH_PROJECTS_LIST_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.FETCH_PROJECTS_LIST_SUCCESS, error });
  }
}