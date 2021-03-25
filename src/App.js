import React from 'react';
import './app.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Route } from 'react-router-dom';

const App = props => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar state={props.state.sidebar}/>
        <div className='app-wrapper-content'>
          <Route 
            path='/messages' 
            render={() => <Messages state={props.state.messagesPage} />}
          />

          <Route 
            exact 
            path='/profile' 
            render={() => <Profile 
                state={props.state.profilePage} 
                dispatch={props.dispatch}
                />
            }
          />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
