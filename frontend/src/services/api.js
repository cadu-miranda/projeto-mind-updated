import axios from 'axios'

const porta = 3333

export const api = axios.create({

    baseURL: `http://localhost:${porta}`,

    headers: {

        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})