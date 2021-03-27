import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

  let postElems = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} id={p.id}/>)
  
  let newPostElem = React.createRef();


  let onAddPost = () => {
    props.addPost()
  }

  let onChangePost = () => {
    let text = newPostElem.current.value;
    props.updateNewPostText(text)
  }

  return(

    <div className={s.postsWrapper}>
      <div>My Posts</div>
      <div>
        <textarea 
          className={s.textarea} 
          placeholder='What`s new?' 
          ref={newPostElem} 
          onChange={onChangePost}
          value={props.newPostText}
        />
        <button className={s.button} onClick={onAddPost}>Add post</button>
      </div>
      <div>
        { postElems }
      </div>
    </div>
  )
}
export default MyPosts;