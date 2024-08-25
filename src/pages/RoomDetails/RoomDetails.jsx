import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import Header from "./Header/Header";
import RoomInfo from "./RoomInfo/RoomInfo";

const RoomDetails = () => {
    const {id}= useParams()
    
    const [room,setRoom]=useState({})
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
        <div >
            {/* title */}
            <Header room={room}></Header>
            <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 gap-5 my-5 md:my-10">
                {/* text */}
                <RoomInfo room={room}></RoomInfo>
                <div className="md:col-span-3">
                    category
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;