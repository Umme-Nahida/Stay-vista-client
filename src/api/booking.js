import axiosSecure from "."

// get all guest booking room data
export const getBookings = async(email)=>{
    const {data}= await axiosSecure.get(`/bookings?email=${email}`)
    return data
}

// get all bookings for host 
export const getHostBookings = async(email)=>{
    const {data}= await axiosSecure.get(`/bookings/host?email=${email}`)
    return data
}