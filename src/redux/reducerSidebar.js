let initialState = {
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

const reducerSidebar = (state = initialState, action) => {

  return state;
}

export default reducerSidebar;