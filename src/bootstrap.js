import axios from 'axios'

window.axios = axios.create({
    baseURL: 'http://localhost:8080/v1',
    headers: {token: window.localStorage.getItem('token')}
  });