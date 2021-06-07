import Api from 'utils/Api';
import { REGISTER_INIT, REGISTER_SUCCESS} from './Register.actionConstants';

const apiInstance = new Api();

const initRegisterCreator = () => ({
  type: REGISTER_INIT,
});

const registerSuccessCreator = (username,password) => ({
  type: REGISTER_SUCCESS,
  payload: {
    username,password
  }
});

const performRegister = (data) => {
  return async (disptach) => {
    disptach(initRegisterCreator());
    const options = {
      url: 'http://localhost:3004/regs',
      method: 'POST',
      data
    }
    await apiInstance.fetch(options);
    disptach(registerSuccessCreator(data.username,data.password));
  };
};

const dummy = () => {};

export { performRegister, dummy };