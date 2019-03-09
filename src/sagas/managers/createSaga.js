import { put, call } from 'redux-saga/effects';
import { createService } from '../../services/managers/createService';

import * as types from '../../actions'

export function* create(payload) {
  try {
    const response = yield call(createService, payload);
    yield [
      put({ type: types.CREATE_PROJECT_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.CREATE_PROJECT_SUCCESS, error });
  }
}