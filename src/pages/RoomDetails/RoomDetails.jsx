import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import Header from "./Header/Header";

const RoomDetails = () => {
    const {id}= useParams()
    
    const [room,setRoom]=useState()
    const [loader,setLoader]=useState(true)

    useEffect(()=>{
       setLoader(true)
       fetch('/rooms.json')
       .then(res=>res.json())
       .then(data=>{
         const singleRoom = data.find(item=> item._id === id)
         setRoom(singleRoom)
       })
    },[id])

    return (
        <div>
            {/* title */}
            <Header room={room}></Header>
            <div>
                {/* text */}
                
            </div>
        </div>
    );
};

export default RoomDetails;