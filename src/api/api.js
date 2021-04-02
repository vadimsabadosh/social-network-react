import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "b34def9f-b6b0-4ad4-9eb9-8da2139f5737"
  }
})

export const getUsers = (currentPage = 1, pageSize = 10) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
}

export const userFollow = (id) => {
  return instance.post(`follow/${id}`).then(response => response.data)
}

export const userUnfollow = (id) => {
  return instance.delete(`follow/${id}`).then(response => response.data)
}