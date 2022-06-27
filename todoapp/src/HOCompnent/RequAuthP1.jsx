import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

const RequAuthP1 = ({children}) => {
 const {isAuth} =  useSelector((state)=>state.auth)
 const navigate = useNavigate()
 const location = useLocation()

 let from = {
    pathname: location.pathname,
 }

 if(isAuth){
    return children
 }
 return navigate("/login_p1"   )
 
}

export default RequAuthP1
