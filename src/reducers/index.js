import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import newReducer from './admin/newReducer';
import list from './admin/listReducer';

const rootReducer = combineReducers({
  register, login, newReducer, list
});

export default rootReducer;