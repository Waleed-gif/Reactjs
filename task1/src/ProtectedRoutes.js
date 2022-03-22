import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from './App';

const useAuth = () => {
     const {user} = useContext(UserContext);
     return user && user.loggedIn;
}

const ProtectedRoutes = () => {
    const location = useLocation();
    const isAuth = useAuth();
    return isAuth ? ( 
        <Outlet /> 
    ):(
        <Navigate to='/' replace state = {{from: location}} />
    );
      
}
 
export default ProtectedRoutes;