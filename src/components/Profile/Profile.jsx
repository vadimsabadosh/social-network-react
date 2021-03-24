import React from 'react'
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return(
    <main className={s.main}>
      <ProfileInfo />
      <MyPosts state={props.state} addPost={props.addPost} updatePostText={props.updatePostText}/>
    </main>
  )
}
export default Profile;