import { createSelector } from 'reselect';

const getUsers = (state) => {
  return state.usersPage.users
}
export const getUsersReselect = createSelector(getUsers, (users) => {
  return users.filter(u => true);
})

export const getPageSize = (state) => {
  return state.usersPage.pageSize
}
export const getTotalCountUsers = (state) => {
  return state.usersPage.totalCountUsers
}
export const getCurrentPage = (state) => {
  return state.usersPage.currentPage
}
export const getIsLoading = (state) => {
  return state.usersPage.isLoading
}
export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress
}