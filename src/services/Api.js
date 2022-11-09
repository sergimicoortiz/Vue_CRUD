import axios from 'axios'

const LaravelPORT = 8001;
const URL = `http://localhost:${LaravelPORT}/api/`;

export default () => {

    const api = axios.create({
        baseURL: URL
    })

    return api
}