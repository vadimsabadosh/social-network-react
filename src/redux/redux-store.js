import { combineReducers, createStore } from 'redux';
import reducerMessages from './reducerMessages';
import reducerProfile from './reducerProfile';
import reducerSidebar from './reducerSidebar';


let reducers = combineReducers({
  messagesPage : reducerMessages, 
  profilePage: reducerProfile, 
  sidebar: reducerSidebar
});
let store = createStore(reducers);

export default store;
