import React from 'react'
import s from './Messages.module.css';
import MessageUser from './MessageUser/MessageUser'
import Message from './Message/Message';

const Messages = (props) => {
  
  let state = props.messagesPage;

  let dialogsElems = state.dialogs.map(d => <MessageUser name={d.name} key={d.id} id={d.id}/> );
  let messagesElems = state.messages.map(m =>  <Message message={m.message} key={m.id} id={m.id}/>)


  let onUpdateMsgText = (e) => {
    let text = e.target.value;
    props.updateMsgText(text)
  }
  let onSendMsg = () => {
    props.sendMsg();
  }

  return (
    <div>
      <h1 className={s.title}>Messages</h1>
      <div className={s.messagesWrapper}>
        <div className={s.messagesUsers}>
          { dialogsElems }
        </div>
        <div className={s.messagesWindow}>
          <div>{ messagesElems }</div>
          <div>
            <textarea 
              onChange={onUpdateMsgText}
              value={state.newTextMsg}
              placeholder='Enter yor message'
            />
            <button onClick={onSendMsg}>Send</button>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Messages;