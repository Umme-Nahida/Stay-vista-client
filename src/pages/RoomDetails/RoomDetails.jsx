import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const RoomDetails = () => {
    const {id}= useParams()
    
    const [rooms,setRooms]=useState()
    const [loader,setLoader]=useState(true)

    useEffect(()=>{
       setLoader(true)
       fetch('/rooms.json')
       .then(res=>res.json())
       .then(data=>{
         const singleRoom = data.find(item=> item._id === id)
         setRooms(singleRoom)
       })
    },[id])

    return (
        <div>
            {/* title */}
            <div>
                {/* imgae */}
            </div>
            <div>
                {/* text */}
                <div></div>
                {/* calender */}
            </div>
        </div>
    );
};

export default RoomDetails;