import axios from "axios";
import { clearCookie } from "./rooms";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials:true
  });

// create interceptors response and check for unauthrized response
axiosSecure.interceptors.response.use(response=>response,async(err)=>{
    console.log(err)
    if(err.response && (err.response.status === 401 || err.response.status === 401)){
        await clearCookie()
        window.location.replace('/login') 
    }
     
    return Promise.reject(err)
})

export default axiosSecure; 