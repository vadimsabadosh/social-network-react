import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

const AuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
      render(){
        if(!this.props.isAuth) return <Redirect to='/login'/>
        return <Component {...this.props} />;
      }
    }
    
    let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return ConnectAuthRedirectComponent;

};

export default AuthRedirect;