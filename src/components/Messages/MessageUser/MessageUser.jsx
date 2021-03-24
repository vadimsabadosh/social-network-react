import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './../Messages.module.css';

const MessageUser = ({name, id}) => {

  let path = `/messages/${id}`;
  return(
    <div >
      <NavLink className={s.messagesUsers_user} to={path} activeClassName={s.messagesUsers_userActive}>{name}</NavLink> 
    </div>
  )
}
export default MessageUser;