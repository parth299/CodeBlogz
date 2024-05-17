import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth';
import {logout} from '../../features/authSlice'

function LogoutBtn() {

    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
        })
        .catch((err) => {
            console.log("Something went wrong :: LogtoutBtn.jsx :: ", err);
        })
    }

  return (
    <div>LogoutBtn</div>
  )
}

export default LogoutBtn