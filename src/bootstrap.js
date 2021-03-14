import axios from 'axios'

window.axios = axios.create({
    baseURL: 'http://192.168.0.105:8080/v1',
    headers: {token: window.localStorage.getItem('token')}
  });