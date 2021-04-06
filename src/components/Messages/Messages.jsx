import React from 'react'
import s from './Messages.module.css';
import MessageUser from './MessageUser/MessageUser'
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { TextArea } from './../common/FormsControl/FormsControl';
import { required, maxLengthCreator } from './../validate/validate';

const maxLength10 = maxLengthCreator(100);


const Messages = (props) => {
  
  let state = props.messagesPage;

  let dialogsElems = state.dialogs.map(d => <MessageUser name={d.name} key={d.id} id={d.id}/> );
  let messagesElems = state.messages.map(m =>  <Message message={m.message} key={m.id} id={m.id}/>)

  let addNewMessage = (values) => {
    props.sendMsg(values.messageText);

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
          <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>

      </div>
    </div>
  )
}


const addMessageForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <Field component={TextArea} name='messageText'
        validate={[ required, maxLength10 ]}
        placeholder='Enter yor message'
      />
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: 'messageForm'})(addMessageForm);

export default Messages;
