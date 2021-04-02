import React from 'react';
import './app.css';
import NavBar from './components/NavBar/NavBar';
import UsersContainer from './components/Users/UsersContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavBar />
        <div className='app-wrapper-content'>
          <Route 
            path='/messages' 
            render={() => <MessagesContainer />}
          />

          <Route 
            path='/profile/:userId?' 
            render={() => <ProfileContainer />
            }
          />
          <Route 
            exact 
            path='/users' 
            render={() => <UsersContainer />}
          />
          <Route 
            exact 
            path='/login' 
            render={() => <LoginContainer />}
          />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
