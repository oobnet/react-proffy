import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.4.8:4022'
    // baseURL: 'http://localhost:4022'
    
})

export default api