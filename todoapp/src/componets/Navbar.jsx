import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CounterApp from '../pages/CounterApp';
import { LogoutApi, logOutApi_1 } from '../Store/Auth/authAction';

const Navbar = () => {
    const dispatch = useDispatch()
   const {isAuth} = useSelector((state)=>state.auth)
   
   const handleLoginClick = ()=>{
    dispatch(LogoutApi())
   }
   

   const handleLoginClickPratice1 = ()=>{
    dispatch(logOutApi_1())
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
  

 {/* pratice 1 start here */}
    <div>
    <h1>pratice 1 </h1>

   <Link to="login_p1">Login_pratice1</Link>
   <button onClick={()=>handleLoginClickPratice1()}>{isAuth?"logout_pratice_1": "login_pratice_1"}</button>
   
    </div>
   {/* pratice 1 end here  */}  
      
    </div>
  )
}

export default Navbar

