import axios from 'axios'

const api = axios.create({baseURL: 'https://nexus-gamestand-api.herokuapp.com'})

export default api