import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';
const SET_PHOTO = 'SET_PHOTO';

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
    case DELETE_POST:{
      return{
        ...state, posts: state.posts.filter(p => p.id !== action.postId)
      }
    }
    case SET_PHOTO:{
      return{
        ...state, profile: {...state.profile, photos: action.photos}
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
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const setPhoto = (photos) => ({type: SET_PHOTO, photos})


/*********** THUNK */
export const getUserProfile = (userId) => {
  return  async(dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data))
  }
}
export const getUserStatus = (userId) => {
  return  async(dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(response.data))
  }
}
export const updateUserStatus = (status) => {
  return  async(dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if(response.data.resultCode === 0){

      dispatch(setUserStatus(status))
    }
  }
}
export const savePhoto = (file) => {
  return  async(dispatch) => {
    const response = await profileAPI.savePhoto(file);
    if(response.data.resultCode === 0){
      dispatch(setPhoto(file))
    }
  }
}
export const saveProfile = (profile) => {
  return  async(dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile);
    if(response.data.resultCode === 0){
      dispatch(getUserProfile(userId))
    }
  }
}