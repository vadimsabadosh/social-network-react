import React from 'react';
import './app.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import UsersContainer from './components/Users/UsersContainer';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Route 
            path='/messages' 
            render={() => <MessagesContainer />}
          />

          <Route 
            exact 
            path='/profile' 
            render={() => <Profile />
            }
          />
          <Route 
            exact 
            path='/users' 
            render={() => <UsersContainer />}
          />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
