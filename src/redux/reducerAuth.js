import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL';

let initialState = {
  userId: null,
  login: null,
  email: null,
  isLoading: false,
  isAuth: false,
  captchaUrl: null
}

const reducerAuth = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:{
      return {
        ...state, 
        ...action.data,
      }
    }
    case GET_CAPTCHA_URL_SUCCESS:{
      return {
        ...state, 
        captchaUrl: action.url,
      }
    }

    default:
      return state;
  }
}
export default reducerAuth;

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: {userId, email, login, isAuth} });
export const getCaptchaUrlSuccess = (url) => ({ type: GET_CAPTCHA_URL_SUCCESS, url });

export const getAuthUserData = () => {
  return async(dispatch) => {
    let response = await authAPI.me();

    if(response.data.resultCode === 0){
      let {id, email, login} = response.data.data
      dispatch(setAuthUserData(id, email, login, true));
    }
  }
}
export const login = (email, password, rememberMe, captcha) => {
  return async(dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);

    if(response.data.resultCode === 0){
      dispatch(getAuthUserData());
    }else {
      if(response.data.resultCode === 10){
        dispatch(getCaptcha())
      }
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
export const getCaptcha = () => {
  return async(dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    let captchaUrl = response.data.url;

      dispatch(getCaptchaUrlSuccess(captchaUrl));
  }
}

