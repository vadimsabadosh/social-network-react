const UPDATE_NEW_MSG_TEXT = 'UPDATE_NEW_MSG_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  dialogs: [
    {id:1, name:'Anton'},
    {id:2, name: 'Daria'},
    {id:3, name:'Adnrew'},
    {id:4, name: 'Oleksa'},
    {id:5, name: 'Alyona'},
    {id:6, name: 'Bruce'},
  ],
  messages:[
    {id:1, message:'Hi'},
    {id:2, message: 'Hi'},
    {id:3, message:'Hi, how are you?'},
    {id:4, message: 'pzdc'},
    {id:5, message: 'are you?'},
    {id:6, message: 'another pzdc'},
  ],
  newTextMsg: '',
}


const reducerMessages = (state = initialState, action) => {

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