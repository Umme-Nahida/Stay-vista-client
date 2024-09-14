import React, { useEffect, useState } from "react";
import { getUserRole } from "../api/Rooms";
import useAuth from "./useAuth";

const useRole = () => {
  const {user}=useAuth(); 
  console.log(user?.email)     
  const [roles, setRole] = useState(null);
  const [loading,setLoading] = useState(true)

  // get user role
  useEffect(() => {
    getUserRole(user?.email)
    .then(data=>{
        console.log(data)
        setRole(data)
        setLoading(false)
    })
      
  }, [user]);
  console.log(roles)

  return [roles,loading];
};

export default useRole;
