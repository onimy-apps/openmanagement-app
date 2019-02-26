import { put, call } from 'redux-saga/effects';
import { profileService, updateProfileService } from '../../services/admin/profileService';

import * as types from '../../actions'

export function* profile(payload) {
  try {
    const response = yield call(profileService, payload);
    yield [
      put({ type: types.FETCH_ADMIN_PROFILE_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.FETCH_ADMIN_PROFILE_SUCCESS, error });
  }
}

export function* updateProfile(payload) {
  try {
    const response = yield call(updateProfileService, payload);
    yield [
      put({ type: types.UPDATE_ADMIN_PROFILE_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.UPDATE_ADMIN_PROFILE_SUCCESS, error });
  }
}