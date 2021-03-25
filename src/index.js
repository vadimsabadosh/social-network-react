import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rerenderApp = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderApp(store.getState());
store.subscribe(rerenderApp);

