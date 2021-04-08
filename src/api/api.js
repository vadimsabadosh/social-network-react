import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "b34def9f-b6b0-4ad4-9eb9-8da2139f5737"
  }
})


export const userAPI = {

  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
  },

  userFollow(id) {
    return instance.post(`follow/${id}`).then(response => response.data)
  },
  
  userUnfollow(id) {
    return instance.delete(`follow/${id}`).then(response => response.data)
  },

}
export const profileAPI = {

  getProfile (id) {
    return instance.get(`profile/${id}`);
  },

  getStatus(id){
    return instance.get(`profile/status/${id}`);
  },
  updateStatus(status){
    return instance.put(`profile/status`, {status: status});
  },
  savePhoto(file){
    let formData = new FormData();
    formData.append('image', file)
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  saveProfile(profile){
    return instance.put(`profile`, profile);
  }
}

export const authAPI = {
  me(){
    return instance.get(`auth/me`)
  },
  login(email, password, rememberMe = false, captcha = null){
    return instance.post(`auth/login`, {email, password, rememberMe, captcha})
  },
  logout(){
    return instance.delete(`auth/login`)
  }
}
export const securityAPI = {
  getCaptchaUrl(){
    return instance.get(`security/get-captcha-url`)
  },
}