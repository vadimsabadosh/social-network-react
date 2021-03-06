import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import reducerAuth from './reducerAuth';
import reducerMessages from './reducerMessages';
import reducerProfile from './reducerProfile';
import reducerSidebar from './reducerSidebar';
import reducerUsers from './reducerUsers';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import reducerApp from './reducerApp';



let reducers = combineReducers({
  messagesPage : reducerMessages, 
  profilePage: reducerProfile, 
  usersPage: reducerUsers,
  sidebar: reducerSidebar,
  auth: reducerAuth,
  form: formReducer,
  app: reducerApp
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
