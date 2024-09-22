import axios from "axios"
import axiosSecure from "."

// get all rooms data
export const getAllRooms = async()=>{
    const {data} = await axiosSecure.get('/rooms')
    return data
}

// get single value
export const getRoom = async id=>{
    const {data} = await axiosSecure.get(`/rooms/${id}`)
    return data 
}

// save rooms data in db
export const saveRooms = async(roomsData)=>{
    const {data} = await axios.post('http://localhost:8000/saveRooms',roomsData,{withCredentials:true})
    return data
}

// get host rooms by host email 
export const hostRooms = async email =>{
    const {data}= await axiosSecure.get(`/hostRooms/${email}`)
    return data 
}

// save user to the database
export const saveUser=async user=>{

    const userInfo = {
        email: user?.email,
        role:'guest',
        status: "Verified"
    }
   const {data}= await axiosSecure.put(`/users/${user?.email}`,userInfo)
   return data;
}

// get user role 
export const getUserRole = async (email) =>{
    const {data} = await axiosSecure.get(`/getUserRole/${email}`)
    console.log(data)
    return data;
}

// create jwt 
export const getJwt = async(user)=>{
    const {data} = await axiosSecure.post('/jwt',user)
    return data;
}

export const clearCookie = async()=>{
    const {data}= await axiosSecure.get('/logout')
    return data 
}

