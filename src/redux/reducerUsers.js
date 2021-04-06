import { userAPI } from '../api/api'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

let initialState = {
  users: [],
  pageSize: 10,
  totalCountUsers: 0,
  currentPage: 1,
  isLoading: false,
  followingInProgress: [],

}

const reducerUsers = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:{
      return {
        ...state, 
        users: state.users.map(u => {
          
          if(u.id === action.userId){
            return {...u, followed: true}
          }
          return u;
        
        })
      }
    }

    case UNFOLLOW:{
      return {
        ...state, 
        users: state.users.map(u => {
          
          if(u.id === action.userId){
            return {...u, followed: false}
          }
          return u;
        
        })
      }  
    } 
    case SET_USERS: {
      return {
        ...state, users: action.users
      } 
    }
    case SET_CURRENT_PAGE:{
      return {
        ...state, currentPage: action.page
      }
    }
    case SET_TOTAL_USERS_COUNT:{
      return {
        ...state, totalCountUsers: action.count
      }
    }
    case TOGGLE_IS_LOADING: {
      return {
        ...state, isLoading: action.isLoading
      }
    }
    case FOLLOWING_IN_PROGRESS: {
      return {
        ...state, 
        followingInProgress: action.bool ?
        [...state.followingInProgress, action.userId] : 
        state.followingInProgress.filter(id => id !== action.userId),

      }
    }
    default:
      return state;
  }
}
export default reducerUsers;


/* ------------- Action Creators ------------------ */ 
export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count });
export const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading });
export const toggleFollowingInProgress = (bool, userId) => ({ type: FOLLOWING_IN_PROGRESS, bool, userId });


/*   ---------- THUNKS -------  */ 

export const getUsersThunk = (page, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsLoading(true));
    dispatch(setCurrentPage(page))
    userAPI.getUsers(page, pageSize).then(response => {
      dispatch(setUsers(response.items));
      dispatch(setTotalUsersCount(response.totalCount));
      dispatch(toggleIsLoading(false))

    })
  }
} 

export const followThunk = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, id))
    userAPI.userFollow(id)
    .then(response => {
      if(response.resultCode === 0){
        dispatch(follow(id)) 
      }
      dispatch(toggleFollowingInProgress(false, id))
    })
  }
} 
export const unfollowThunk = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, id));
    userAPI.userUnfollow(id)
    .then(response => {
      if(response.resultCode === 0){
        dispatch(unfollow(id)) 
      }
      dispatch(toggleFollowingInProgress(false, id))
    })
  }
} 
