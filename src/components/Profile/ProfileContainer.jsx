import React from 'react'
import Profile from './Profile';
import axios from 'axios'
import { connect } from 'react-redux';
import { setUserProfileAC } from '../../redux/reducerProfile';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId){
      userId = 2
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
      this.props.setUserProfile(response.data);

    })
  }
  

  render(){
  
    return(
      <Profile {...this.props}/>
    )
  }
}


const ProfileWithRouter = withRouter(ProfileContainer);

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setUserProfile: (profile) => {
      dispatch(setUserProfileAC(profile))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileWithRouter);