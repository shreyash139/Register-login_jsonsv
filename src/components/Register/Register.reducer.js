import { REGISTER_INIT, REGISTER_SUCCESS } from './Register.actionConstants';
import Register from './Register.class';

const DEFAULT_STATE = new Register().getReduxState()

const transformData = data => {
  return { ...data };
};


const RegisterReducer = (state = DEFAULT_STATE, {type, payload}) => {
  switch (type) {
    case REGISTER_INIT: {
      const details = { loading: true }
      const applicationInstance = new Register(state, details)
      const updatedState = applicationInstance.getReduxState()
      return updatedState
    }
    case REGISTER_SUCCESS: {
      const regData = transformData(payload);
      console.log(regData)
      const details = { loading: false, data: regData, error: DEFAULT_STATE.error }
      const applicationInstance = new Register(state, details)
      const updatedState = applicationInstance.getReduxState()
      return updatedState
    }
    default:
      return state;
  }
};

export default RegisterReducer;