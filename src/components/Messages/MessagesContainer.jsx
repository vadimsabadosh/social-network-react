import { connect } from 'react-redux';
import { updateTextMsgActionCreator, sendMsgActionCreator } from '../../redux/reducerMessages';
import Messages from './Messages';
import AuthRedirect from './../hoc/AuthRedirect';
import { compose } from 'redux';


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

const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  }
}
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  AuthRedirect
)(Messages);