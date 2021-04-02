import { connect } from 'react-redux';
import { updateTextMsgActionCreator, sendMsgActionCreator } from '../../redux/reducerMessages';
import Messages from './Messages';
import AuthRedirect from './../hoc/AuthRedirect';

const AuthRedirectComponent = AuthRedirect(Messages)

const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
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

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default MessagesContainer;