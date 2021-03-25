import React from 'react'
import s from './Messages.module.css';
import MessageUser from './MessageUser/MessageUser'
import Message from './Message/Message';
import { updateTextMsgActionCreator, sendMsgActionCreator } from '../../redux/state';

const Messages = (props) => {

  let dialogsElems = props.state.dialogs.map(d => <MessageUser name={d.name} key={d.id} id={d.id}/> );
  let messagesElems = props.state.messages.map(m =>  <Message message={m.message} key={m.id} id={m.id}/>)


  let updateMsgText = (e) => {
    let text = e.target.value;
    props.dispatch(updateTextMsgActionCreator(text));
  }
  let sendMsg = () => {
    props.dispatch(sendMsgActionCreator());
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
              onChange={updateMsgText}
              value={props.state.newTextMsg}
              placeholder='Enter yor message'
            />
            <button onClick={sendMsg}>Send</button>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Messages;