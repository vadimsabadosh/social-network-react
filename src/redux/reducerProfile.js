const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
  posts: [
    {id:1, message:'Hi', likesCount:12},
    {id:2, message: 'Hi',  likesCount:12},
    {id:3, message:'Hi, how are you?',  likesCount:12},
    {id:4, message: 'pzdc',  likesCount:12},
    {id:5, message: 'are you?',  likesCount:12},
    {id:6, message: 'another pzdc',  likesCount:12},
  ],
  newPostText: ''
}

const reducerProfile = (state = initialState, action) => {
  debugger;
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