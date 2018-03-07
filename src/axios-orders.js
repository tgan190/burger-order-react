import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ta-react-my-burger.firebaseio.com/'
});

export default instance;
