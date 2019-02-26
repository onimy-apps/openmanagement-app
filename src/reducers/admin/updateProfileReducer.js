import * as types from '../../actions';

export default function(state = [], action) {
  const response = action.response;

  switch(action.type) {
    case types.UPDATE_ADMIN_PROFILE_SUCCESS:
      return { ...state, response };
    case types.UPDATE_ADMIN_PROFILE_SUCCESS:
      return { ...state, response };
    default:
      return state;
  }
};