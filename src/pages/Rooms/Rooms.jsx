import { useEffect, useState } from "react";
import Cart from "./Cart";
import Container from "../../components/Shared/Container";

const Rooms = () => {
    const [rooms,setRooms]=useState()
    useEffect(()=>{
       fetch('rooms.json')
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
        setRooms(data)
       })
    },[])
    return (
       <Container>
         <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5">
            {
                rooms?.map(item=>(
                    <Cart key={item._id} item={item}></Cart>
                ))
            }
        </div>
       </Container>
    );
};

export default Rooms;