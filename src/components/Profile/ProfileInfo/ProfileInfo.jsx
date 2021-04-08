import React, { useState } from 'react'
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatusHooks'
import default_img from '../../../assets/images/default_user.png';
import ProfileDataFormRedux from './ProfileDataForm';

const ProfileInfo = (props) => {

  const [editMode, setEditMode] = useState(false);
  
  if(!props.profile){
    return <Preloader /> 
  }

  const onSubmit = (formData) => {
    props.saveProfile(formData);
    setEditMode(false)
    }

  const goToEditMode = () => {
    setEditMode(true)
  }
  const onMainPhotoSelected = e => {
    if(e.target.files.length){
      props.savePhoto(e.target.files[0]);
    }
    
  }
  return(
    <div className={s.profile_wrap}>
      <div>
        <div className={s.mainImg}>
          <img  src={props.profile.photos.large ||  default_img} />
        </div>
        {props.isOwner && <div>
          <input type="file" onChange={onMainPhotoSelected}/>
        </div>}
      </div>
    <div className={s.profileContent}>
    { editMode ? <ProfileDataFormRedux 
                      initialValues={props.profile} 
                      status={props.status} 
                      updateUserStatus={props.updateUserStatus}
                      onSubmit={onSubmit}
                    /> :
                    <ProfileData 
                      profile={props.profile} 
                      status={props.status} 
                      updateUserStatus={props.updateUserStatus} 
                      isOwner={props.isOwner} 
                      goToEditMode={goToEditMode }
                    />}
        <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
    </div>
     
      <Contacts profile={props.profile}/>
    </div>
  )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return(
    <>
        {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
        <div>
          <h3>{profile.fullName}</h3>
        </div>
        <div>
          <b>Looking for a job:</b> {profile.lookingForAJob ? 'Yes' : 'No'}
        </div>
        { profile.lookingForAJob && <div>
          <b>My Skills:</b> {profile.lookingForAJobDescription}
        </div> }
        <div>
          <b>About Me:</b> {profile.aboutMe}
        </div>
        
      </>
  )
}

const Contacts = ({profile}) => {
  return(
    <div>
    <h3>Contacts</h3>
    {/* {props.profile.github && <p>Github: {props.profile.github}</p>}
    {props.profile.vk && <p>VK: {props.profile.vk}</p>}
    {props.profile.facebook && <p>Facebook: {props.profile.facebook}</p>}
    {props.profile.instagram && <p>Instagram: {props.profile.instagram}</p>}
    {props.profile.twitter && <p>Twitter: {props.profile.twitter}</p>}
    {props.profile.website && <p>Website: {props.profile.website}</p>}
    {props.profile.youtube && <p>Youtube: {props.profile.youtube}</p>}
    {props.profile.mainLink && <p>Link: {props.profile.mainLink}</p>} */}
    <p>Github: {profile.github}</p>
    <p>VK: {profile.vk}</p>
    <p>Facebook: {profile.facebook}</p>
    <p>Instagram: {profile.instagram}</p>
    <p>Twitter: {profile.twitter}</p>
    <p>Website: {profile.website}</p>
    <p>Youtube: {profile.youtube}</p>
    <p>Link: {profile.mainLink}</p>
  </div>
  )
}
export default ProfileInfo;