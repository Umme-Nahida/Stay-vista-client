import React from 'react';
import useRole from '../hooks/useRole';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../pages/Loader';

const AdminRoute = ({children}) => {
   const [roles,loading] = useRole()
   const location = useLocation()
   console.log(loading)
   console.log(roles)

  if(loading){ return <Loader></Loader>}
  if(roles?.role === 'admin'){return children }
  return <Navigate to='/dashboard' state={{from:location}} replace='true' ></Navigate>

};

export default AdminRoute;