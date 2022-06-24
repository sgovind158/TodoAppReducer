
 import * as types from "../Auth/auth.types"
import axios from  "axios"

export const LoginApi = (data)=>(dispatch)=>{

    dispatch({type:types.AUTHLOADING})

    axios.post("https://reqres.in/api/login",{
        email:data.email,
        password:data.password,
    })
    .then((r)=>{
        dispatch({type:types.AUTHSUCCESS , payload: r.data})
    }).catch((error)=>{
        dispatch({type:types.AUTHERROR})
    })
}


export const LogoutApi = ()=>({type:types.AUTHLOGOUT})




