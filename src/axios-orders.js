import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-project-9224d-default-rtdb.firebaseio.com/'
});

export default instance;