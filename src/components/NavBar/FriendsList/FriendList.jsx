import React from 'react';
import s from './../NavBar.module.css';

const FriendList = ({friendsList}) => {

  let friends = friendsList.map(friend => {
    return(
        <div className={s.friend} key={friend.id}>
          <img src={friend.photo} alt=""/>
          <h4>{friend.name}</h4>
        </div>
    )
  })
  
  return (
    <div className={s.friends_wrap}>
      <h3>Friends</h3>
      <div className={s.friends}>
          { friends }
      </div>
    </div>
  );
};

export default FriendList;