import { LOGIN_INIT, LOGOUT_INIT, LOGIN_SUCCESS, LOGIN_FAILURE } from './Login.constants';


const initLoginCreator = () => ({
  type: LOGIN_INIT,
});
const successLoginCreator = ({ username, password }) => ({
  type: LOGIN_SUCCESS,
  payload: {
    username,
    password
  } 
});

const initLogoutCreator = () => ({
  type: LOGOUT_INIT,
});

const performLogin = ({ username, password }) => {
  console.warn(username)
  return async (disptach) => {
    disptach(initLoginCreator());
    disptach(successLoginCreator({ username, password }));
  };
};

const performLogout=()=>{
  return async (disptach) => {
    disptach(initLogoutCreator());
  };
}

const dummy = () => {};

export { performLogin,performLogout, dummy };
