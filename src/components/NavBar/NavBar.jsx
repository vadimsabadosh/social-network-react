import React from 'react'
import FriendList from './FriendsList/FriendList';
import Menu from './Menu/Menu';
import s from './NavBar.module.css';

const NavBar = ({state}) => {
  return(
      <nav className={s.nav}>
        <Menu />
        <FriendList friendsList={state.friendsList}/>
      </nav>
  )
}
export default NavBar;