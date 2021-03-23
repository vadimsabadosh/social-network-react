import React from 'react';
import './app.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Route exact path='/messages' component={Messages}/>
          <Route exact path='/profile' component={Profile}/>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
