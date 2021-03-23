import React from 'react'
import s from './Post.module.css';

const Post = ({message, likesCount}) => {
  return(
        <div>
          <img src='' />
          <div className={s.post}>
            {message}
          </div>
          <div className={s.like}>
            like {likesCount} 
          </div>
        </div>
  )
}
export default Post;