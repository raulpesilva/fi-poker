import axios from 'axios'

const BASE_URL = 'https://hackathon.yellowcam.com/api/v1/'

const api = axios.create({
  baseURL: BASE_URL
})

export default api; 