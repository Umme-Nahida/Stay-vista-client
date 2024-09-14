import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Loader from '../pages/Loader';

const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth();
    const location = useLocation();
 
    if(loading){
     return <Loader></Loader>
    }
   if(user) return children
   return <Navigate to='/dashboard' state={{from:location}} replace='true' ></Navigate>
};

export default PrivateRoute;