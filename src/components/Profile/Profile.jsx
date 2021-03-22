import React from 'react'
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
    <div className={s.postsWrapper}>
      <div>My Posts</div>
      <div>
        New post
      </div>
      <div>
        <div>
          post
        </div>
      </div>
    </div>
  </main>
  )
}
export default Profile;