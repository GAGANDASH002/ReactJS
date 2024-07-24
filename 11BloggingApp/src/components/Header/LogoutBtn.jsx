import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn(){
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
    

    return(
        <button 
         className="w-full bg-white text-blue-600 py-2 px-6 rounded-3xl shadow-lg hover:bg-red-600 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
        onClick={logoutHandler}
        >Logout</button>
    )
}

export default LogoutBtn