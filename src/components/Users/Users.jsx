import axios from 'axios';
import React from 'react';
import UserItem from './UserItem/UserItem';
import s from './Users.module.css';

class Users extends React.Component {

  componentDidMount(){
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        this.props.setUsers(response.data.items);
      })
  }
  
  render(){
    return (
      <div className={s.wrapper}>
        
        
        {this.props.users.map(u => 
          <UserItem 
            follow={this.props.follow} 
            unfollow={this.props.unfollow} 
            key={u.id} id={u.id} 
            followed={u.followed} 
            photoURL={u.photos.small} 
            fullName={u.name} 
            status={u.status} 
            // country={u.location.country} 
            // city={u.location.city}
          />)
        }
        
      </div>
    );
  }
  
};

export default Users;