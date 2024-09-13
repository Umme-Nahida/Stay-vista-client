import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import AddRoomForm from "../../Form/AddRoomForm";
import { imageUpload } from "../../../Utilities/Utils";
import useAuth from "../../../hooks/useAuth";
import { saveRooms } from "../../../api/Rooms";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddRoom = () => {
    const [loading, setLoading]=useState(false)
    const {user}=useAuth();
    console.log(user)
    const [uploadButtonText,setUploadButtonText] = useState('Upload Image')
    const navigate = useNavigate()

    // upload button text handler
    const handleImageChange=(image)=>{
      setUploadButtonText(image.name)
    }

    const [dates,setDates]=useState({
        startDate: new Date(),
        endDate: new Date(),
        key: "selection"
    })

    const handleSubmit=async(e)=>{
       setLoading(true)
       e.preventDefault()
        const form = e.target;
        const location = form.location.value;
        const category = form.category.value;
        const title = form.title.value;
        const to = dates.endDate
        const from =dates.startDate
        const price = form.price.value;
        const guest = form.total_guest.value;
        const bedrooms = form.bedrooms.value;
        const bathrooms = form.bathrooms.value;
        const description = form.description.value;
        const image = form.image.files[0]
        
        const host = {
          name: user?.displayName,
          image: user?.photoURL,
          email: user?.email
        }

        const image_url = await imageUpload(image)
        const roomData = {
          location,
          category,title,to,from, price,guest,bedrooms,bathrooms,description,
          image: image_url?.data?.display_url,
          host
        }
        
        console.log(roomData)
        try{
          const data = await saveRooms(roomData)
          console.log(data)
          if(data.insertedId){
            toast.success("rooms added successfully")
            navigate('/dashboard/my-listings')
          }
        }catch(err){
          toast.error(err?.message)
        }finally{
          setLoading(false)
        }

       console.log(roomData)
    }

    const handleDate = (range)=>{
        setDates(range.selection)
    }
  return (
    <div>
      <Helmet>
        <title>Add Room | Dashboard</title>
      </Helmet>

      <AddRoomForm 
       handleSubmit={handleSubmit}
       handleDates={handleDate}
       dates={dates}
       handleImageChange={handleImageChange}
       uploadButtonText={uploadButtonText}
      ></AddRoomForm>
    </div>
  );
};

export default AddRoom;
