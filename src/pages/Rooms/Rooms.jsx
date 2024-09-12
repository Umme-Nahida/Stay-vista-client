import { useEffect, useState } from "react";
import Cart from "./Cart";
import Container from "../../components/Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "./Heading";
import { ScaleLoader } from "react-spinners";
import { getAllRooms } from "../../api/Rooms";

const Rooms = () => {
    const [rooms,setRooms]=useState();
    const [params,setParams]=useSearchParams();
    const category = params.get('category');
    const [loader,setLoader]=useState(true);
    useEffect(()=>{
       setLoader(true)
       getAllRooms()
       .then(data=>{
        console.log(data)
       if(category){
        const categoryData = data.filter(item=>item.category === category)
        setRooms(categoryData)
        setLoader(false)
       }else{
        console.log(data)
        setRooms(data)
        setLoader(false)
       }
        
       
       })
    },[category])

    if(loader){
        return <div className="flex items-center justify-center  min-h-[calc(100vh-300px)] ">
            <ScaleLoader className="text-[#F43F5E]" />
        </div>
    }
    return (
       <Container>
        {
            rooms && rooms.length > 0 ? (
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5">
            {
                rooms?.map(item=>(
                    <Cart key={item._id} item={item}></Cart>
                ))
            }
        </div>
            ) :
            (
              <div className="flex items-center justify-center  min-h-[calc(100vh-300px)]" >
               <Heading center={true} title={"No Available In This Room"} subtitle={"Please Select Others Category"}></Heading>
              </div>
            )
        }
       </Container>
    );
};

export default Rooms;