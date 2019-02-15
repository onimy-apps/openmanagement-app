import * as types from './index';

export const newEmployeeAction = (user) => {
  return {
    type: types.ON_SAVE_NEW_EMPLOYEE,
    user
  }
};