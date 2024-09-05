import axios from "axios"


export const getAllRooms = async()=>{
    const {data} = await axios.get('/rooms')
    return data
}