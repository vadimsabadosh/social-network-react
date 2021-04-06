import React from 'react';
import './app.css';
import NavBar from './components/NavBar/NavBar';
import UsersContainer from './components/Users/UsersContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { setInitApp } from './redux/reducerApp';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.setInitApp();
  }
  
  render(){
    if(!this.props.init){
      return <Preloader />
    }
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
              render={() => <Login />}
            />
          </div>
        </div>
      </BrowserRouter>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    init: state.app.initialized
  }
}
export default connect(mapStateToProps, { setInitApp })(App);
