import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return(
    <main className={s.main}>
      <ProfileInfo saveProfile={props.saveProfile} savePhoto={props.savePhoto} isOwner={props.isOwner}profile={props.profile} updateUserStatus={props.updateUserStatus} status={props.status} {...props}/>
      <MyPostsContainer />
    </main>
  )
}
export default Profile;