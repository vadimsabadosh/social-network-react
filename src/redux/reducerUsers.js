const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: []
}

const reducerUsers = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:{
      return {
        ...state, 
        users: state.users.map(u => {
          
          if(u.id === action.userId){
            return {...u, folowed: true}
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
            return {...u, folowed: false}
          }
          return u;
        
        })
      }  
    } 
    case SET_USERS: {
      return {
        ...state, users: [...state.users, ...action.users]
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
