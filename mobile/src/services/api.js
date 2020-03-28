import axios from 'axios';

//usar o url que aparece no site quando abre o emulador web
const api = axios.create({
    baseURL: 'http://192.168.1.87:19000'
});

export default api;