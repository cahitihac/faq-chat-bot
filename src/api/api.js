import axios from 'axios'
import { AUTH_TOKEN } from './auth_token'

const request = async (method, url, requestData, onUploadProgress) => {
  try {
    const response = await axios({
      baseURL: 'http://10.254.19.23:3004',
      method,
      url,
      data: requestData,
      onUploadProgress: (progressEvent) => onUploadProgress ? onUploadProgress(progressEvent) : f => f,
    })
    return Promise.resolve(response)
  } catch (error) {
    return Promise.reject(error)
  }
}

const request2 = async (method, url, requestData) => {
  try {
    const response = await axios({
      baseURL: 'http://10.254.19.24:5002',
      method,
      url,
      data: requestData,
      headers: {'Authorization': AUTH_TOKEN}
    }); 

    return Promise.resolve(response)
  } catch (error) {
    return Promise.reject(error)
  }
}

export default {
    createUser(data) {
        return request('post', 'api/signup', data)
    },

    login(data) {
        return request('post', 'api/login', data)
    },

    uploadFile(data, onUploadProgress) {
        return request('post', 'api/generate', data, onUploadProgress)
    },

    sendMessage(data) {
        return request2('post', 'api/conversations/default/messages', data)
    }
}