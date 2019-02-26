import * as types from './index';

export const newEmployeeAction = (user) => {
  return {
    type: types.ON_SAVE_NEW_EMPLOYEE,
    user
  }
};

export const employeesListAction = () => {
  return {
    type: types.FETCH_EMPLOYEES_LIST
  }
}

export const adminProfileAction = (payload) => {
  return {
    type: types.FETCH_ADMIN_PROFILE,
    payload: payload
  }
}