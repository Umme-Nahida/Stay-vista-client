import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../hooks/useAuth";
import { saveUser } from "../../../api/Rooms";
import { useNavigate } from "react-router-dom";

const Social = () => {
    const {signInWithGoogle,user} = useAuth()
    const navigate = useNavigate()

    const handleGoogle= async()=>{
       const result = await signInWithGoogle()
       await saveUser(result.user)
       navigate('/')
    }
  return (
    <div>
      <div onClick={handleGoogle} className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer">
        <FcGoogle size={32} />

        <p>Continue with Google</p>
      </div>
    </div>
  );
};

export default Social;
