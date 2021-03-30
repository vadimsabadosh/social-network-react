import axios from 'axios';
import React from 'react';
import UserItem from './UserItem/UserItem';
import s from './Users.module.css';

class Users extends React.Component {

  componentDidMount(){
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      })
  }

  onPageChanged = (p) => {

    this.props.setCurrentPage(p)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items);
      })
  }
  
  render(){
    
    let pageCount = Math.ceil(this.props.totalCountUsers / this.props.pageSize);

    let pages = [];

    for(let i = 1; i <= pageCount; i++){
      pages.push(i);
    }
    return (
      <div className={s.wrapper}>
        
        <div className={s.pageBtn}>
          {pages.map(p => {
            return <span 
              key={p}
              className={this.props.currentPage === p ? s.selectedPage : ''}
              onClick={(e) => {this.onPageChanged(p) }}>{p}</span>
          })}
        </div>
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