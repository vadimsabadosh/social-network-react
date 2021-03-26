const UPDATE_NEW_MSG_TEXT = 'UPDATE_NEW_MSG_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

const reducerMessages = (state, action) => {

  switch (action.type) {
    case UPDATE_NEW_MSG_TEXT:
      state.newTextMsg = action.newText;
      return state;
    case SEND_MESSAGE:
      let newMsg = {
        id: 10,
        message: state.newTextMsg,
      }
      state.messages.push(newMsg);
      state.newTextMsg = '';
      return state;
    default: 
      return state;
  }
}

export default reducerMessages;


export const updateTextMsgActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MSG_TEXT,
    newText: text
  }
}
export const sendMsgActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  }
}