import { getAuthUserData } from './reducerAuth';

const SET_INIT = 'SET_INIT';

let initialState = {
  initialized: false,
}

const reducerApp = (state = initialState, action) => {
  switch (action.type) {
    case SET_INIT:{
      return {
        ...state,
        initialized: true
      }
    }

    default:
      return state;
  }
}
export default reducerApp;

export const setInit = () => ({ type: SET_INIT});

export const setInitApp = () => {
  return (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
      dispatch(setInit())
    })
  }
}
