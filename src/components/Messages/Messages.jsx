import React from 'react'
import s from './Messages.module.css';
import MessageUser from './MessageUser/MessageUser'
import Message from './Message/Message'

const Messages = ({ state }) => {

  let dialogsElems = state.dialogs.map(d => <MessageUser name={d.name} key={d.id} id={d.id}/> );
  let messagesElems = state.messages.map(m =>  <Message message={m.message} key={m.id} id={m.id}/>)

  return (
    <div>
      <h1 className={s.title}>Messages</h1>
      <div className={s.messagesWrapper}>
        <div className={s.messagesUsers}>
          { dialogsElems }
        </div>
        <div className={s.messagesWindow}>
          { messagesElems }
        </div>

      </div>
    </div>
  )
}
export default Messages;