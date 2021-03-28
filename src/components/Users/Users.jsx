import React from 'react';
import UserItem from './UserItem/UserItem';
import s from './Users.module.css';

const Users = (props) => {

  if(!props.users.length){
    props.setUsers( [
    {id: 1, photoURL: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', followed: false, fullName: 'Dmitry K', status: 'look a like', location: { country: 'Ukraine', city: 'Lviv' }},
    {id: 2, photoURL: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', followed: false, fullName: 'Andre Boyarskiy', status: 'Чинаа', location: { country: 'Ukraine', city: 'Kyiv' }},
    {id: 3, photoURL: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', followed: true, fullName: 'Alen Delone', status: 'Cool mann', location: { country: 'Great Britain', city: 'London' }},
    {id: 4, photoURL: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', followed: true, fullName: 'Dimitry Vegas', status: 'TomorrowLand!', location: { country: 'USA', city: 'Los Angeles' }},
    {id: 5, photoURL: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', followed: false, fullName: 'Arthur Konan Doyle', status: 'Life is beautiful', location: { country: 'Great Britain', city: 'London' }},
    {id: 6, photoURL: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', followed: true, fullName: 'Forest Gump', status: 'run for life', location: { country: 'USA', city: 'Nordonville' }},
  ]);
  }
  

  return (
    <div className={s.wrapper}>
      
      
      {props.users.map(u => 
        <UserItem 
          follow={props.follow} 
          unfollow={props.unfollow} 
          key={u.id} id={u.id} 
          followed={u.followed} 
          photoURL={u.photoURL} 
          fullName={u.fullName} 
          status={u.status} 
          country={u.location.country} 
          city={u.location.city}
        />)
      }
      
    </div>
  );
};

export default Users;