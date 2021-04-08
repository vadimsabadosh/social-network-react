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
          {props.captcha && <div><img src={props.captcha} /></div> }
          {props.captcha && <Field name='captcha' component={Input} validate={required} type='text' placeholder='Enter Captcha' /> }
        <div>
          <button>Login</button>
        </div>

      </form>
  );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm) 

const Login = (props) => {
  const onSubmit = ({ email, password, rememberMe, captcha }) => {
  props.login(email, password, rememberMe, captcha);
    
  }
  if(props.isAuth){
    return <Redirect to='/profile'/> 
  }
  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha}/>
    </>
  )
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captcha: state.auth.captchaUrl
  }
}
export default connect(mapStateToProps, { login })(Login);