import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/reducerProfile';



const MyPosts = (props) => {

  let postElems = props.state.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} id={p.id}/>)
  
  let newPostElem = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  } 

  let onChangePost = () => {
    let text = newPostElem.current.value;
    let action = updatePostTextActionCreator(text)
    props.dispatch(action);
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