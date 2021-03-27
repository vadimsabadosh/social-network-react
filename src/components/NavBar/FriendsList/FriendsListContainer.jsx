import { connect } from 'react-redux';
import FriendList from './FriendList'

const mapStateToProps = (state) => {
  return {
    friendsList: state.sidebar.friendsList
  }
}
const FriendsListContainer = connect(mapStateToProps)(FriendList);

export default FriendsListContainer;