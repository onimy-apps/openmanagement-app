import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import newReducer from './admin/newReducer';
import list from './admin/listReducer';
import adminProfile from './admin/profileReducer';
import updateProfile from './admin/updateProfileReducer';
import createProject from './managers/createProjectReducer';

const rootReducer = combineReducers({
  register,
  login,
  newReducer,
  list,
  adminProfile,
  updateProfile,
  createProject
});

export default rootReducer;