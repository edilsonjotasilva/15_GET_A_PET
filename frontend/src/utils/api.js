import axios from 'axios'
// const AxiosDigestAuth = require('@mhoc/axios-digest-auth').default;

export default axios.create({
    baseURL: 'http://localhost:5000'
})