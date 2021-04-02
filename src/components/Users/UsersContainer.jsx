import React from 'react';
import { connect } from "react-redux";
import { 
  unfollow, 
  setCurrentPage, 
  getUsersThunk,
  followThunk,
  unfollowThunk
} from "../../redux/reducerUsers";
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {

  componentDidMount(){
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (p) => {
    this.props.getUsersThunk(p, this.props.pageSize);
    this.props.setCurrentPage(p)
  }
  
  render(){
    return (
    
      <>
        {this.props.isLoading ? 
          <Preloader /> :
          <Users 
            totalCountUsers={this.props.totalCountUsers}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            followThunk={this.props.followThunk}
            unfollowThunk={this.props.unfollowThunk}
            followingInProgress={this.props.followingInProgress}
          />}
      </>
    )
  }
  
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCountUsers: state.usersPage.totalCountUsers,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export default  connect(mapStateToProps, {
  unfollow, setCurrentPage,
  getUsersThunk, followThunk, unfollowThunk
})(UsersContainer);
