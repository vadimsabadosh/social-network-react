import React from 'react'
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return(

    <div className={s.postsWrapper}>
      <div>My Posts</div>
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        <Post message='sdfsdfsdf' likesCount='0'/>
        <Post message='dgvhnjfdn' likesCount='19'/>
      </div>
    </div>
  )
}
export default MyPosts;