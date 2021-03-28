import { combineReducers, createStore } from 'redux';
import reducerMessages from './reducerMessages';
import reducerProfile from './reducerProfile';
import reducerSidebar from './reducerSidebar';
import reducerUsers from './reducerUsers';


let reducers = combineReducers({
  messagesPage : reducerMessages, 
  profilePage: reducerProfile, 
  usersPage: reducerUsers,
  sidebar: reducerSidebar,
});
let store = createStore(reducers);

export default store;
