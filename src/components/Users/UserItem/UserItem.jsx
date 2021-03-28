import React from 'react';
import s from '../Users.module.css';

const UserItem = (props) => {
  return (
    <div className={s.userItem_wrap}>
      <div className={s.item}>
        <img src={props.photoURL} alt=""/>
      </div>
      <div className={s.info}>
        <div className={s.leftSide}>
          <h4>{props.fullName}</h4>
          <p>{props.status}</p>
          {props.followed ? 
            <button onClick={() => { props.unfollow(props.id) }}>Unfollow</button> :
            <button onClick={() => { props.follow(props.id) }}>Follow</button>  
          }
        </div>
        <div className={s.rightSide}>
          <h5>{props.country}</h5>
          <h5>{props.city}</h5>
        </div>
      </div>
    </div>
  );
};

export default UserItem;