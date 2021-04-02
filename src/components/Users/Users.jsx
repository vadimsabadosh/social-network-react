import React from 'react';
import s from './Users.module.css';
import UserItem from './UserItem/UserItem'

const Users = (props) => {
  let pageCount = Math.ceil(props.totalCountUsers / props.pageSize);

    let pages = [];

    for(let i = 1; i <= 10; i++){
      pages.push(i);
    }

  return (
    <div className={s.wrapper}>
        
        <div className={s.pageBtn}>
          {pages.map(p => {
            return <span 
              key={p}
              className={props.currentPage === p ? s.selectedPage : ''}
              onClick={(e) => {props.onPageChanged(p) }}>{p}</span>
          })}
        </div>
        {props.users.map(u => 
          <UserItem 
            key={u.id} id={u.id} 
            followed={u.followed} 
            photoURL={u.photos.small} 
            fullName={u.name} 
            status={u.status} 
            followThunk={props.followThunk}
            unfollowThunk={props.unfollowThunk}
            followingInProgress={props.followingInProgress}
            // country={u.location.country} 
            // city={u.location.city}
          />)
        }
        
      </div>
  );
};

export default Users;