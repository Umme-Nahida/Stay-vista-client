import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header/Header";
import RoomInfo from "./RoomInfo";
import Calender from "./Calender";
import RoomReservation from "./RoomReservation/RoomReservation";
import Container from "../../components/Shared/Container";

const RoomDetails = () => {
    const {id}=useParams()
    const [loader,setLoader]=useState(true);
    const [room,setRoom]=useState({})

    useEffect(()=>{
       setLoader(true)
       fetch('/rooms.json')
       .then(res=>res.json())
       .then(data=>{
        const singleRoom = data.find(item=>item._id === id)
        setRoom(singleRoom)
        setLoader(false)
       })
    },[id])


    return (
        <Container>
            <div>
            <Header roomData={room}></Header>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-x-5 py-10">
                <RoomInfo roomData={room}></RoomInfo>
                <div className="col-span-3 ">
                    <RoomReservation roomData={room}></RoomReservation>
                </div>
            </div>
        </div>
        </Container>
    );
};

export default RoomDetails;