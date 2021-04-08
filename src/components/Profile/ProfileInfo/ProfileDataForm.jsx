import React from 'react';
import s from './ProfileInfo.module.css';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../common/FormsControl/FormsControl';
import { required } from '../../validate/validate';
import { TextArea } from './../../common/FormsControl/FormsControl';

const ProfileDataForm = ({handleSubmit}) => {


  return (
    <div className={s.profileContent}>
      <form onSubmit={handleSubmit}>
      <div><button>Save</button></div>
        <div>
          <b>Full Name: </b> <Field 
            name='fullName' 
            validate={required}
            component={Input} 
            type='text' 
            placeholder='Enter your name' />
        </div>
        <div>
          <b>Looking for a job?</b> 
          <Field 
            name='lookingForAJob' 
            component={Input} 
            type='checkbox'  />
        </div>
        <div>
          <b>My Skills:</b> 
          <Field 
            name='lookingForAJobDescription' 
            validate={required}
            component={TextArea} 
            placeholder='Enter your Skills'
            />
        </div>
        <div>
          <b>About Me:</b>
          <Field 
            name='aboutMe' 
            component={TextArea} 
            placeholder='Enter About Me'
            />
        </div>
      </form>
    </div>
  );
};

const ProfileDataFormRedux = reduxForm({form: 'profileForm'})(ProfileDataForm)

export default ProfileDataFormRedux;