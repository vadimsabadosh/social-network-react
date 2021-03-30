const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
  users: [],
  pageSize: 10,
  totalCountUsers: 0,
  currentPage: 1
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
    default:
      return state;
  }
}
export default reducerUsers;

export const followAC = (userId) => ({ type: FOLLOW, userId });

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setTotalUsersCountAC = (count) => ({ type: SET_TOTAL_USERS_COUNT, count });
