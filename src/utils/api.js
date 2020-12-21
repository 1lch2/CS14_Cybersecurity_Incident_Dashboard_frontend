import axios from "axios"

const api = axios.create({
    timeout: 5000,
    headers: {'Content-Type': 'application/json'}
})

api.interceptors.request.use(config => {return config});
api.interceptors.response.use(data => {return data});

export default api