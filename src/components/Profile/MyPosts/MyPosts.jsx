import React from 'react'
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postElems = props.state.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} id={p.id}/>)
  
  let newPostElem = React.createRef();

  let addPost = () => {
    props.addPost();
  } 

  let onChangePost = () => {
    let text = newPostElem.current.value;
    props.updatePostText(text);
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
          value={props.state.newPostText}
        />
        <button className={s.button} onClick={addPost}>Add post</button>
      </div>
      <div>
        { postElems }
      </div>
    </div>
  )
}
export default MyPosts;