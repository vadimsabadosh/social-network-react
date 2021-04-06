import React from 'react';
import s from './FormControl.module.css'


const FormControl = ({ input, child, meta: { touched, error }, ...props }) => {
  
  const hasError = touched && error;

  return (
    <div className={hasError ? s.errorInput : ''}>
      {props.children}
      {hasError && <span className={s.error}>{error}</span>}
    </div>
  );
};

export const TextArea = (props) => {
  const { input, meta, ...restProps } = props
  return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
};


export const Input = (props) => {
  const { input, meta, ...restProps } = props
  return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
};




