import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-6fa0a.firebaseio.com/'
});

export default instance;