import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const test = () => api.get(`/test`)

const apis = {
    test,
}

export default apis