import React from 'react'
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile } from '../../redux/reducerProfile';
import { withRouter } from 'react-router-dom';
//import AuthRedirect from './../hoc/AuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if(!userId){
      userId = this.props.userId
      if(!userId){
        this.props.history.push('/login')
      }
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }
  componentDidMount() {
    this.refreshProfile()
  }
  componentDidUpdate(prevProps, prevState) {
    if(this.props.match.params.userId !== prevProps.match.params.userId){
      this.refreshProfile()
    }
  }
  

  render(){
    return(
      <Profile {...this.props} 
        saveProfile={this.props.saveProfile}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile} 
        status={this.props.status} 
        savePhoto={this.props.savePhoto}
        updateUserStatus={this.props.updateUserStatus}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,
    isAuth: state.auth.isAuth
  }
}
export default compose(
  connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile}),
  withRouter,
  //AuthRedirect
)(ProfileContainer);