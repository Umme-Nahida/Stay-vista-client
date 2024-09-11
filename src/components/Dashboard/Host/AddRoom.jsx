import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import AddRoomForm from "../../Form/AddRoomForm";

const AddRoom = () => {

    const [dates,setDates]=useState({
        startDate: new Date(),
        endDate: new Date(),
        key: "selection"
    })

    const handleSubmit=e=>{
        e.PrevendDefault()
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

        const image_url = await 

       console.log(location,category,title,to,from, price,guest,bedrooms,bathrooms,description,image)
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
      ></AddRoomForm>
    </div>
  );
};

export default AddRoom;
