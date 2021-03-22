import React from 'react'
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return(
    <main className={s.main}>
    <div className={s.mainImg}>
      <img src='' />
    </div>
    <div className={s.profileContent}>
      ava+ desc
    </div>
    <MyPosts />
  </main>
  )
}
export default Profile;