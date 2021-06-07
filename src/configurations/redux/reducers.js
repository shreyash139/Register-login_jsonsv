import { combineReducers } from 'redux';
import LoginReducer from 'components/Login/Login.reducer';
import RegReducer from 'components/Register/Register.reducer'

const allReducer = {
  login: LoginReducer,
  register: RegReducer
};

const combinedReducer = combineReducers(allReducer);

export default combinedReducer;
