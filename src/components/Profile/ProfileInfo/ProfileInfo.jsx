import React from 'react'
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus'
import default_img from '../../../assets/images/default_user.png';

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader /> 
  }
  return(
    <div className={s.profile_wrap}>
      <div className={s.mainImg}>
        <img  src={props.profile.photos.large ? props.profile.photos.large : default_img} />
      </div>
      <div className={s.profileContent}>
        <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
      </div>
    </div>
  )
}
export default ProfileInfo;