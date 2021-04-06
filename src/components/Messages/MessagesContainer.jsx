import { connect } from 'react-redux';
import { sendMsgActionCreator } from '../../redux/reducerMessages';
import Messages from './Messages';
import AuthRedirect from './../hoc/AuthRedirect';
import { compose } from 'redux';


const mapDispatchToProps = (dispatch) => {
  return {
    sendMsg: (messageText) => {
      dispatch(sendMsgActionCreator(messageText));
    }
  }
}

const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  }
}
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  AuthRedirect
)(Messages);