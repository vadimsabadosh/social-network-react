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
}


const reducerMessages = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:{
      let newMsg = {
        id: 10,
        message: action.messageText,
      }
      return {
        ...state,
        messages: [...state.messages, newMsg],
      }
    }
    default: 
      return state;
  }
}

export default reducerMessages;


export const sendMsgActionCreator = (messageText) => {
  return {
    type: SEND_MESSAGE,
    messageText
  }
}