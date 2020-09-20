import axios from 'axios'

const BASE_URL = 'http://ec2-54-201-21-116.us-west-2.compute.amazonaws.com/api/v1/'

const api = axios.create({
  baseURL: BASE_URL
})

export default api; 