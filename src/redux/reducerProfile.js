const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const reducerProfile = (state, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount:0
      }
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_POST_TEXT:
      state.newPostText = action.newText;
      return state;

  
    default:
      return state;
  }
}
export default reducerProfile;

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}
export const updatePostTextActionCreator = (text) => {
  return {
    type: UPDATE_POST_TEXT,
    newText: text
  }
}