import reducerProfile, { addPostActionCreator, deletePost } from './reducerProfile';
import React from 'react'
import App from '../App';
import ReactDOM from 'react-dom'



it('new Post added', () => {

  // 1. Test data
  let action  = addPostActionCreator('react lesson');
  let state = {
    posts: [
      {id:1, message:'Hi', likesCount:12},
      {id:2, message: 'Hi',  likesCount:12},
      {id:3, message:'Hi, how are you?',  likesCount:12},
      {id:4, message: 'pzdc',  likesCount:12},
      {id:5, message: 'are you?',  likesCount:12},
      {id:6, message: 'another pzdc',  likesCount:12},
    ]
  }

  // 2. Start test
  let newState = reducerProfile(state, action)

  // 3. Expect data
  expect(newState.posts.length).toBe(7)
  expect(newState.posts[6].message).toBe('react lesson')

})
it('delete post', () => {

  // 1. Test data
  let action  = deletePost(2);
  let state = {
    posts: [
      {id:1, message:'Hi', likesCount:12},
      {id:2, message: 'Hi',  likesCount:12},
      {id:3, message:'Hi, how are you?',  likesCount:12},
      {id:4, message: 'pzdc',  likesCount:12},
      {id:5, message: 'are you?',  likesCount:12},
      {id:6, message: 'another pzdc',  likesCount:12},
    ]
  }

  // 2. Start test
  let newState = reducerProfile(state, action)

  // 3. Expect data
  expect(newState.posts.length).toBe(5)


})
it('not delete post', () => {

  // 1. Test data
  let action  = deletePost(50);
  let state = {
    posts: [
      {id:1, message:'Hi', likesCount:12},
      {id:2, message: 'Hi',  likesCount:12},
      {id:3, message:'Hi, how are you?',  likesCount:12},
      {id:4, message: 'pzdc',  likesCount:12},
      {id:5, message: 'are you?',  likesCount:12},
      {id:6, message: 'another pzdc',  likesCount:12},
    ]
  }

  // 2. Start test
  let newState = reducerProfile(state, action)

  // 3. Expect data
  expect(newState.posts.length).toBe(6)


})