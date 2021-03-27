import React from 'react';
import './app.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';

const App = props => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar state={props.store.getState().sidebar}/>
        <div className='app-wrapper-content'>
          <Route 
            path='/messages' 
            render={() => <MessagesContainer store={props.store} />}
          />

          <Route 
            exact 
            path='/profile' 
            render={() => <Profile store={props.store} />
            }
          />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
