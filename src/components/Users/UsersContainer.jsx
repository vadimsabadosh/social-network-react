import React from 'react';
import { connect } from "react-redux";
import { 
  unfollow, 
  getUsersThunk,
  followThunk,
  unfollowThunk
} from "../../redux/reducerUsers";
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import AuthRedirect from './../hoc/AuthRedirect';
import { getPageSize, getUsersReselect, getTotalCountUsers, getCurrentPage, getIsLoading, getFollowingInProgress } from '../../redux/users-selectors';

class UsersContainer extends React.Component {

  componentDidMount(){
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (p) => {
    this.props.getUsersThunk(p, this.props.pageSize);
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
    users: getUsersReselect(state),
    pageSize:  getPageSize(state),
    totalCountUsers: getTotalCountUsers(state),
    currentPage: getCurrentPage(state),
    isLoading: getIsLoading(state),
    followingInProgress: getFollowingInProgress(state)
  }
}
export default compose(
  connect(mapStateToProps, {
    unfollow,  getUsersThunk, 
    followThunk, unfollowThunk
  }),
  //AuthRedirect
)(UsersContainer);

