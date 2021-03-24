import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../NavBar.module.css';


const Menu = () => {
  return (
      <div className={s.nav_wrap}>
        <div className={s.item}>
          <NavLink to='/profile' className={s.link} activeClassName={s.active}>Profile </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/messages' className={s.link} activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/news' className={s.link} activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/music' className={s.link} activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/settings' className={s.link} activeClassName={s.active}>Settings</NavLink>
        </div>
      </div>
  );
};

export default Menu;