import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {


  return(
    <header className={s.header}>
      <img className={s.headerImg} src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" />
      <div className={s.nav_wrap}>
        <NavLink to='/feed' className={s.header_link} activeClassName={s.active_link}>Feed</NavLink>
        <NavLink to='/music' className={s.header_link} activeClassName={s.active_link}>Music</NavLink>
        <NavLink to='/users' className={s.header_link} activeClassName={s.active_link}>Find Users</NavLink>
        {props.isAuth ? 
          <button className={s.logout_btn} onClick={props.logout}>Log Out</button> :
          <NavLink to='/login' className={s.logout_btn}>Log In</NavLink> }
      </div>
    </header>
  )
}
export default Header;