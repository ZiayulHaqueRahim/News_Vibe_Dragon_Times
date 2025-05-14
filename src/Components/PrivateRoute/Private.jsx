import React, { use } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Loading';

const Private = ({children}) => {
   const {user,loading} = use(AuthContext);

   const location = useLocation();

   

   if(loading){
    return <Loading></Loading>
   };
   if(user && user?.email){
    return children;
   }
   return  <Navigate state={location.pathname} to='/auth/login'/>
};

export default Private;