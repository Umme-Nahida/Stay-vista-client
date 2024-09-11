import axios from "axios"

// get all rooms data
export const getAllRooms = async()=>{
    const {data} = await axios.get('http://localhost:8000/rooms')
    return data
}

// save rooms data in db
export const saveRooms = async(roomsData)=>{
    const {data} = await axios.post('http://localhost:8000/saveRooms',roomsData,{withCredentials:true})
    return data
}