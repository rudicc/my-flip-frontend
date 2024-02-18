import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import CookieService from '../services/CookieService';

function LogOut() {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"; 

    useEffect(() =>{
        localStorage.removeItem("tmbuser")
        CookieService.remove("chopbook-access_token");
        navigate(from, { replace: true }); 
    })
  return (
        <></>
  )
}

export default LogOut
