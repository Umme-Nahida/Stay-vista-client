import React, { useEffect, useState } from "react";
import { getUserRole } from "../api/Rooms";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
  const {user,loading}=useAuth(); 

  // // get user role
  // useEffect(() => {
  //   getUserRole(user?.email)
  //   .then(data=>{
  //       console.log(data)
  //       setRole(data)
  //       setLoading(false)
  //   })
      
  // }, [user]);
  // console.log(roles)

  const {data:roles,isLoading} = useQuery({
    enableda: !loading && !!user?.email,
    queryKey:['roles'],
    queryFn: getUserRole(user?.email)

  })

  return [roles];
};

export default useRole;
