import axios from "axios";

const api = axios.create({
    baseURL: 'http://app.hinovamobile.com.br/ProvaConhecimentoWebApi',

})

export default api;