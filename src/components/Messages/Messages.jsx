import React from 'react'
import s from './Messages.module.css';


const Messages = () => {
  return (
    <div>
      <h1 className={s.title}>Messages</h1>
      <div className={s.messagesWrapper}>
        <div className={s.messagesUsers}>
          <div className={s.messagesUsers_user + ' ' + s.messagesUsers_userActive}>
            Anton
          </div>
          <div className={s.messagesUsers_user}>
            Andre
          </div>
          <div className={s.messagesUsers_user}>
            Orest
          </div>
          <div className={s.messagesUsers_user}>
            Johnny
          </div>
          <div className={s.messagesUsers_user}>
            Andre
          </div>
          <div className={s.messagesUsers_user}>
            Orest
          </div>
          <div className={s.messagesUsers_user}>
            Johnny
          </div>
        </div>
        <div className={s.messagesWindow}>
          <div className={s.message}>Hi</div>
          <div className={s.message}>Hi, how are you?</div>
          <div className={s.message}>pzdc</div>
          <div className={s.message}>another pzdc</div>
        </div>

      </div>
    </div>
  )
}
export default Messages;