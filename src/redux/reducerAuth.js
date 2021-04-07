import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  userId: null,
  login: null,
  email: null,
  isLoading: false,
  isAuth: false,
}

const reducerAuth = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:{
      return {
        ...state, 
        ...action.data,
      }
    }

    default:
      return state;
  }
}
export default reducerAuth;

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: {userId, email, login, isAuth} });

export const getAuthUserData = () => {
  return async(dispatch) => {
    let response = await authAPI.me();

    if(response.data.resultCode === 0){
      let {id, email, login} = response.data.data
      dispatch(setAuthUserData(id, email, login, true));
    }
  }
}
export const login = (email, password, rememberMe) => {
  return async(dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);

    if(response.data.resultCode === 0){
      dispatch(getAuthUserData());
    } else {
      let action = stopSubmit('login', {_error: response.data.messages[0]});
      dispatch(action)
    }
  }
}
export const logout = () => {
  return async(dispatch) => {
    let response = await authAPI.logout();
    
    if(response.data.resultCode === 0){
      dispatch(setAuthUserData(null, null, null, false));
    }
  }
}