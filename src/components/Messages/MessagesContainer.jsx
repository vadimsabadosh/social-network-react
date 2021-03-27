import React from 'react'
import { updateTextMsgActionCreator, sendMsgActionCreator } from '../../redux/reducerMessages';
import Messages from './Messages';

const MessagesContainer = (props) => {
  let state = props.store.getState().messagesPage
  let updateMsgText = (text) => {
    props.store.dispatch(updateTextMsgActionCreator(text));
  }
  let sendMsg = () => {
    props.store.dispatch(sendMsgActionCreator());
  }

  return (
    <Messages updateMsgText={updateMsgText} sendMsg={sendMsg} messagesPage={state}/>
  )
}
export default MessagesContainer;