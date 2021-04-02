import { applyMiddleware, combineReducers, createStore } from 'redux';
import reducerAuth from './reducerAuth';
import reducerMessages from './reducerMessages';
import reducerProfile from './reducerProfile';
import reducerSidebar from './reducerSidebar';
import reducerUsers from './reducerUsers';
import thunkMiddleware from 'redux-thunk'


let reducers = combineReducers({
  messagesPage : reducerMessages, 
  profilePage: reducerProfile, 
  usersPage: reducerUsers,
  sidebar: reducerSidebar,
  auth: reducerAuth
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
