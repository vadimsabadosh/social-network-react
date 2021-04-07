import React from 'react';
import s from './Users.module.css';
import UserItem from './UserItem/UserItem'
import Paginator from '../common/Paginator/Paginator';

const Users = (props) => {

  return (
    <div className={s.wrapper}>
        <Paginator 
          currentPage={props.currentPage} 
          onPageChanged={props.onPageChanged} 
          totalCountUsers={props.totalCountUsers}
          pageSize={props.pageSize}
        />
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