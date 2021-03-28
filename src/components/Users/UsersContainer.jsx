import { connect } from "react-redux";
import { setUsersAC, followAC, unfollowAC } from "../../redux/reducerUsers";
import Users from "./Users";


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer