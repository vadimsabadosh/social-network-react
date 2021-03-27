import { connect } from 'react-redux';
import { updateTextMsgActionCreator, sendMsgActionCreator } from '../../redux/reducerMessages';
import Messages from './Messages';


const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateMsgText: (text) => {
      dispatch(updateTextMsgActionCreator(text));
    },
    sendMsg: () => {
      dispatch(sendMsgActionCreator());
    }
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
export default MessagesContainer;