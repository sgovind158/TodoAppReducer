
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

///////practice 1 

export const LoginAPi_1 = (data)=>(dispatch)=>{
    dispatch({type: types.AUTHLOADING_1})

    axios.post("https://reqres.in/api/login",{
        email : data.email,
        password : data.password,
    }).then((res)=>{
        dispatch({type : types.AUTHSUCCESS_1 , payload : res.data})
    }).catch((err)=>{
        dispatch({type: types.AUTHERROR_1})
    })
}

export const  logOutApi_1 = ()=>({type: types.AUTHLOGOUT_1})

////practice1 










