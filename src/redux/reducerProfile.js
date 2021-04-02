const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  posts: [
    {id:1, message:'Hi', likesCount:12},
    {id:2, message: 'Hi',  likesCount:12},
    {id:3, message:'Hi, how are you?',  likesCount:12},
    {id:4, message: 'pzdc',  likesCount:12},
    {id:5, message: 'are you?',  likesCount:12},
    {id:6, message: 'another pzdc',  likesCount:12},
  ],
  newPostText: '',
  profile: null,
}

const reducerProfile = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount:0
      }
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, newPost]
      };
    case UPDATE_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };
    case SET_USER_PROFILE:{
      return{
        ...state, profile: action.profile
      }
    }
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
export const setUserProfileAC = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  }
}