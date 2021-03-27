import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/reducerProfile';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  } 

  let onChangePost = (text) => {
    let action = updatePostTextActionCreator(text)
    props.store.dispatch(action);
  }
  return(<MyPosts 
      addPost={addPost} 
      updateNewPostText={onChangePost} 
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
      />)
}
export default MyPostsContainer;