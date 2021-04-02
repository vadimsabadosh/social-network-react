import React from 'react'
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader'

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader /> 
  }
  return(
    <div>
      <div className={s.mainImg}>
        <img  src={props.profile.photos.large} />
      </div>
      <div className={s.profileContent}>
        ava+ desc
      </div>
    </div>
  )
}
export default ProfileInfo;