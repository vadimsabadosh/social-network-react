import React from 'react';
import s from '../Users.module.css';
import default_userPhoto from '../../../assets/images/default_user.png' 
import { NavLink } from 'react-router-dom';

const UserItem = (props) => {
  return (
    <div className={s.userItem_wrap}>
      <div className={s.item}>
        <NavLink to={'/profile/' + props.id }>
          <img src={props.photoURL !== null ? props.photoURL : default_userPhoto} alt=""/>
        </NavLink>
      </div>
      <div className={s.info}>
        <div className={s.leftSide}>
          <h4>{props.fullName}</h4>
          <p>{props.status}</p>
          {props.followed ? 
            <button disabled={props.followingInProgress.some(id => id === props.id)} 
            onClick={() => props.unfollowThunk(props.id)}>Unfollow</button> :
            <button disabled={props.followingInProgress.some(id => id === props.id)} 
            onClick={() => props.followThunk(props.id)}
            >Follow</button>  
          }
        </div>
        <div className={s.rightSide}>
          <h5>{"props.country"}</h5>
          <h5>{'props.city'}</h5>
        </div>
      </div>
    </div>
  );
};

export default UserItem;