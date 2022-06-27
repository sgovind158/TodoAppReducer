import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation,Navigate, useNavigate } from 'react-router-dom'


const RequAuth = ({children}) => {
    const {isAuth}  = useSelector((state)=>state.auth)
    const navigate = useNavigate()
    const location = useLocation()
    const from = {
        pathname: location.pathname
    }

    if(isAuth)return  children
//  return  navigate("/login")
    return   <Navigate to= "/login"  state = {from} replace/>
  
}

export default RequAuth
