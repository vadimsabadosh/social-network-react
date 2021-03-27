import React from 'react'
import FriendsListContainer from './FriendsList/FriendsListContainer';
import Menu from './Menu/Menu';
import s from './NavBar.module.css';

const NavBar = () => {
  return(
      <nav className={s.nav}>
        <Menu />
        <FriendsListContainer />
      </nav>
  )
}
export default NavBar;