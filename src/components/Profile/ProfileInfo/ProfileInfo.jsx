import React from 'react'
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return(
    <div>
      <div className={s.mainImg}>
        <img  src='https://media.istockphoto.com/videos/be-confident-when-pursuing-success-video-id1130630420?s=640x640' />
      </div>
      <div className={s.profileContent}>
        ava+ desc
      </div>
    </div>
  )
}
export default ProfileInfo;