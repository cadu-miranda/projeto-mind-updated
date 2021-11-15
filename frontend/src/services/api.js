import axios from 'axios'

export const api = axios.create({

    baseURL: 'http://localhost:3333',

    headers: {

        Authorization: `Bearer ${localStorage.getItem('user_token')}`
    }
})