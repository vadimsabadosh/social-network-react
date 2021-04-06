import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/reducerProfile';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    addPost: (postText) => {
      dispatch(addPostActionCreator(postText));
    },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;