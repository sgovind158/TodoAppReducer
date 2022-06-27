import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { LoginAPi_1 } from '../Store/Auth/authAction'

const Login_p1 = () => {
    const dispatch =useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const { isAuth} = useSelector((state)=>state.auth)
    const [loginCreads, setLoginCreads] = useState({
        email: "eve.holt@reqres.in",
        password: 123456
    })

    const handleChange = (e)=>{
      const   {name,value} = e.target

      setLoginCreads({
        ...loginCreads,
        [name] : value
      })
    }

const handleFormSubmite = (e)=>{
    e.preventDefault()

    dispatch(LoginAPi_1(loginCreads))

}

useEffect(()=>{

    if(isAuth){
        return navigate("/todoAppP1" , {replace:true})
    }else{
        return navigate("/login_p1" , {replace:true})
    }

},[navigate,isAuth])
    
  return (
    <div>
        <h1>login pratice 1</h1>

        <form onSubmit = {(e)=>handleFormSubmite(e)}>

            <input type="text" 
               name='email'
               value={loginCreads.email}
                placeholder="enter your email"
                onChange={(e)=>handleChange(e)}
                   />

             <input type="text" 
               name='password'
               value={loginCreads.password}
                placeholder="enter your email"
                onChange={(e)=>handleChange(e)}
                   />

          <button type='submit'>Login_p1</button>
        </form>
      
    </div>
  )
}

export default Login_p1
