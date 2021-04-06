import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from './../common/FormsControl/FormsControl';
import { required } from './../validate/validate';
import { login } from '../../redux/reducerAuth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import s from '../common/FormsControl/FormControl.module.css'

const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
          <Field 
            name='email' 
            validate={required}
            component={Input} 
            type='email' 
            placeholder='Email' />
            
          <Field name='password' component={Input} validate={required} type='password' placeholder='Password' />
          <Field name='rememberMe' validate={required} component={Input} type='checkbox' /> remember me
          {props.error && <div className={s.groupError}>{props.error}</div> }
        <div>
          <button>Login</button>
        </div>

      </form>
  );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm) 

const Login = (props) => {
  const onSubmit = ({ email, password, rememberMe }) => {
  props.login(email, password, rememberMe);
    
  }
  if(props.isAuth){
    return <Redirect to='/profile'/> 
  }
  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </>
  )
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}
export default connect(mapStateToProps, { login })(Login);