import { connect } from "react-redux";
import { setUsersAC, followAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC } from "../../redux/reducerUsers";
import Users from "./Users";


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCountUsers: state.usersPage.totalCountUsers,
    currentPage: state.usersPage.currentPage
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
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page))
    },
    setTotalUsersCount: (count) => {
      dispatch(setTotalUsersCountAC(count))
    },
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer