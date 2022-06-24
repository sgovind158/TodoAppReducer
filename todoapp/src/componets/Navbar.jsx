import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CounterApp from '../pages/CounterApp';
import { LogoutApi } from '../Store/Auth/authAction';

const Navbar = () => {
    const dispatch = useDispatch()
   const {isAuth} = useSelector((state)=>state.auth)
   
   const handleLoginClick = ()=>{
    dispatch(LogoutApi())
   }
   
 
  return (
    <div>
        <h1>Navbar</h1>
        <Link to="/" > Counter</Link>
  <Link to="/todoApp" > TodoApp</Link>
  <Link to="/showCompleteTodo" > ShowComplete</Link>
  <Link to="/showUnCompleteTodo" > ShowUnComplete</Link>
  <Link to="/login" > Login</Link>
    <button onClick={()=>handleLoginClick()}>{isAuth ? "logout" : "login"}</button>
      
    </div>
  )
}

export default Navbar

