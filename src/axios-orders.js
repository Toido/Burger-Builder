import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-76bca.firebaseio.com/'
});


export default instance;