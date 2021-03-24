import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, updatePostText } from './redux/state';


export const rerenderApp = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updatePostText={updatePostText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

