import {store} from '../configurations/redux/store';

const isAuthenticated = () => {
    const state = store.getState();
    const {data} = state.login;
    console.log("data",data)
    console.log("state",state)
        if(data.username) {
            return true;
        }

    return false;
};

export default isAuthenticated;
