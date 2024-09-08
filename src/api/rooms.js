import axios from "axios"


export const getAllRooms = async()=>{
    const {data} = await axios.get('http://localhost:8000/rooms')
    return data
}