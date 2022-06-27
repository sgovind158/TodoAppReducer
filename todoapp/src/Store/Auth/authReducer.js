import * as types from "../Auth/auth.types"


let token = localStorage.getItem("token")

const initState = {
    loading :false,
    error:false,
    isAuth: !!token,
    token:token
}


export const authReducer = (state = initState, action)=>{

    let {type,payload} = action
  switch(type){

    case types.AUTHLOADING :{

        return {
            ...state,
            loading:true
        }
    }

    case types.AUTHSUCCESS :{
        console.log(payload)
       localStorage.setItem("token",payload.token)
        return{
            ...state,
            loading:false,
            error:false,
            isAuth:true,
            token:payload.token
        }
    }


    case types.AUTHERROR :{

        return {
            ...state,
            loading :false,
            error:true,
            isAuth:false
        }
    }


    case types.AUTHLOGOUT :{
        localStorage.removeItem("token")

        return {
            ...state,
            token:"",
            isAuth:false,
        }
    }
// /////////pratice1

case types.AUTHLOADING_1 :

   return{
    ...state,
    loading :true,
    error : false
   }

   case types.AUTHSUCCESS_1 :
     localStorage.setItem("token",payload.token)

     return{
        ...state,
        loading:false,
        error:false,
        isAuth:true,
        token: payload.token
     }


     case types.AUTHERROR_1:

       return{
          ...state,
          loading:false,
          error:true,
          isAuth:false
       }


       case types.AUTHLOGOUT_1:
        localStorage.removeItem("token")
        return{
            ...state,
            loading:false,
            isAuth:false,
            token:""
        }

///////////pratice1
    default:{
        return state
    }


  }
    
}