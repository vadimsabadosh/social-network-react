import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
  posts: [
    {id:1, message:'Hi', likesCount:12},
    {id:2, message: 'Hi',  likesCount:12},
    {id:3, message:'Hi, how are you?',  likesCount:12},
    {id:4, message: 'pzdc',  likesCount:12},
    {id:5, message: 'are you?',  likesCount:12},
    {id:6, message: 'another pzdc',  likesCount:12},
  ],
  profile: null,
  status: ''
}

const reducerProfile = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.postText,
        likesCount:0
      }
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, newPost]
      };
    case SET_USER_PROFILE:{
      return{
        ...state, profile: action.profile
      }
    }
    case SET_USER_STATUS:{
      return{
        ...state, status: action.status
      }
    }
    default:
      return state;
  }
}
export default reducerProfile;

/******* ACTION CREATORS */

export const addPostActionCreator = (postText) => {
  return {
    type: ADD_POST,
    postText
  }
}

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  }
}
export const setUserStatus = (status) => {
  return {
    type: SET_USER_STATUS,
    status
  }
}


/*********** THUNK */
export const getUserProfile = (userId) => {
  return  (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
      dispatch(setUserProfile(response.data))
    })
  }
}
export const getUserStatus = (userId) => {
  return  (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
      dispatch(setUserStatus(response.data))
    })
  }
}
export const updateUserStatus = (status) => {
  return  (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
      if(response.data.resultCode === 0){

        dispatch(setUserStatus(status))
      }
    })
  }
}