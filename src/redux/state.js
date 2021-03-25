
let store = {
  _state :{
    profilePage:{
      posts: [
        {id:1, message:'Hi', likesCount:12},
        {id:2, message: 'Hi',  likesCount:12},
        {id:3, message:'Hi, how are you?',  likesCount:12},
        {id:4, message: 'pzdc',  likesCount:12},
        {id:5, message: 'are you?',  likesCount:12},
        {id:6, message: 'another pzdc',  likesCount:12},
      ],
      newPostText: ''
    },
    messagesPage:{
      dialogs: [
        {id:1, name:'Anton'},
        {id:2, name: 'Daria'},
        {id:3, name:'Adnrew'},
        {id:4, name: 'Oleksa'},
        {id:5, name: 'Alyona'},
        {id:6, name: 'Bruce'},
      ],
      messages:[
        {id:1, message:'Hi'},
        {id:2, message: 'Hi'},
        {id:3, message:'Hi, how are you?'},
        {id:4, message: 'pzdc'},
        {id:5, message: 'are you?'},
        {id:6, message: 'another pzdc'},
      ]
    },
    sidebar: {
      friendsList:[
        {
          id:1,
          name: 'Alice',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg'
        },
        {
          id:2,
          name: 'Arthur',
          photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id:3,
          name: 'Eric',
          photo: 'https://media.gettyimages.com/photos/headshot-of-44-year-old-mixed-race-man-in-casual-polo-shirt-picture-id1264106963?s=612x612'
        },
      ]
    }
    
  },
  _callSubscriber(){
    console.log('state changed');
  },

  getState(){
    return this._state;
  },
  subscribe(observer){
    this._callSubscriber = observer;
  },
  dispatch(action){
    if(action.type === 'ADD-POST'){
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount:0
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    }else if(action.type === 'UPDATE-POST-TEXT'){
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => {
  return {
    type: 'ADD-POST'
  }
}
export const updatePostTextActionCreator = (text) => {
  return {
    type: 'UPDATE-POST-TEXT',
    newText: text
  }
}

export default store;