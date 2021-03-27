import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rerenderApp = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderApp(store.getState());
store.subscribe(() => {
  rerenderApp(store.getState())
});

