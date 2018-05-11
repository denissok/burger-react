import axios from 'axios';

const instance=axios.create ({
    baseURL: 'https://burger-backend.firebaseio.com/'
});

export default instance;