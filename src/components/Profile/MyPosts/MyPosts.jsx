import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { required, maxLengthCreator } from './../../validate/validate';
import { TextArea } from './../../common/FormsControl/FormsControl';

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {

  let postElems = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} id={p.id}/>)
  
  let addNewPost = (values) => {
    props.addPost(values.postText);
  }

  return(

    <div className={s.postsWrapper}>
      <div>My Posts</div>
      <AddNewPostReduxForm onSubmit={addNewPost}/>
      <div>
        { postElems }
      </div>
    </div>
  )
}
export default MyPosts;

const AddNewPostForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <Field component={TextArea} name='postText'
        validate={[ required, maxLength10 ]}
        className={s.textarea} 
        placeholder='What`s new?' 
      />
      <button className={s.button}>Add post</button>
    </form>
  )
}

const AddNewPostReduxForm = reduxForm({form: 'postForm'})(AddNewPostForm)