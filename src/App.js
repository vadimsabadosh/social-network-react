import React from 'react';
import './app.css';
import store from './redux/redux-store';
import NavBar from './components/NavBar/NavBar';
import UsersContainer from './components/Users/UsersContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect, Provider } from 'react-redux';
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

    );
  }
}
const mapStateToProps = (state) => {
  return {
    init: state.app.initialized
  }
}

const AppContainer = connect(mapStateToProps, { setInitApp })(App);

const MainApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}
export default MainApp;