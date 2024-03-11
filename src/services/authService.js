import axios from "axios";
import md5 from "md5";

 const BASE_URL="http://api.valantis.store:40000/";
 const passwordName='Valantis';
const API = axios.create({ 
    baseURL: BASE_URL
})

API.interceptors.request.use(config => {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = ('0' + (currentDate.getMonth() + 1)).slice(-2); 
  let day = ('0' + currentDate.getDate()).slice(-2); 
  let formattedDate = year + month + day;
    
    config.headers['X-Auth'] = md5(`${passwordName}_${formattedDate}`);
    
    return config;
  }, error => {
    return Promise.reject(error);
  });

export const {post} = API 