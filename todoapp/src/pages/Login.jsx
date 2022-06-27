import React ,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate,useLocation } from 'react-router-dom'
import { LoginApi } from '../Store/Auth/authAction'

const Login = () => {
    const dispatch = useDispatch()
    const location  = useLocation()
    const navigate = useNavigate()
    const {isAuth} = useSelector((state)=>state.auth)
    const [loginCreads, setLoginCreads] = useState({
        email:"eve.holt@reqres.in",
        password : "12345",
    });

const handleChange = (e)=>{

    const {name,value} =e.target;
    setLoginCreads(
        {
            ...loginCreads,
            [name] :value,
        }
    )
}

 const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(LoginApi(loginCreads))
 }

  useEffect(()=>{
    console.log(isAuth)
    if(isAuth){
        navigate("/todoApp" , {replace:true})
    }else{
        navigate("/login" , {replace:true})
    }
  },[navigate,isAuth])

  return (
    <div>
      <h1>login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email"
           name = "email"
             value={loginCreads.email}
             placeholder="enter your email"
               onChange={handleChange} />

          <input type="password"
           name = "password"
             value={loginCreads.password}
             placeholder="enter your password"
               onChange={handleChange} />

               <button type='submit'>Login</button>

      </form>
    </div>
  )
}

export default Login
