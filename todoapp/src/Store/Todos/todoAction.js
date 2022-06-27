

import * as types  from "../Todos/action.types"
import axios from "axios"


export const getTodos = ()=>(dispatch)=>{
    dispatch({type:types.GETTODOSLOADING})

    axios.get("http://localhost:8082/todos")
    .then((res)=>{
        dispatch({type : types.GETTODOSSUCCESS , payload : res.data})
    })
     .catch((error)=>{
        dispatch({type: types.GETTODOSERROR})
     })

}


export const addTodos = (payload)=>(dispatch)=>{
    dispatch({type: types.ADDTODOSLOADING})

    axios.post("http://localhost:8082/todos",payload)
    .then((res)=>{
        console.log(res.data,"data")
        dispatch({type:types.ADDTODOSSUCCESS ,payload:res.data})
    })
    .catch((error)=>{
        dispatch({type:types.ADDTODOSERROR})
    })

}


export const updateTodo = (payload)=>(dispatch)=>{
    const {id,value} = payload;

    axios.put(`http://localhost:8082/todos/${id}/`,{
        value
    }).then((res)=>{
        
    axios.get("http://localhost:8082/todos")
    .then((res)=>{
        dispatch({type : types.GETTODOSSUCCESS , payload : res.data})
    })
     .catch((error)=>{
        dispatch({type: types.GETTODOSERROR})
     })
    }).catch((error)=>{
        console.log(error)
    })

}

export const deleteTodo = (id)=>(dispatch)=>{

    axios.delete(`http://localhost:8082/todos/${id}/`)
    .then((res)=>{
    
        dispatch({type : types.DELETETODO ,payload:id})
    }).catch((error)=>{
        console.log(error)
    })
    
}

export const completeTodo = (id,status)=>(dispatch)=>{
   
  

    // const {id,  upDate} = payload;

  axios.patch(`http://localhost:8082/todos/${id}/`,{
    isCompleted : status
  }).then((res)=>{

    dispatch({type:types.COMPLETETODO ,payload:res.data})


    axios.get("http://localhost:8082/todos")
    .then((res)=>{
        dispatch({type : types.GETTODOSSUCCESS , payload : res.data})
    })
     .catch((error)=>{
        dispatch({type: types.GETTODOSERROR})
     })

  }).catch((err)=>{
    console.log(err)
  })


    
}


/////////pratice 1 start here

export const getTodos_P1 = ()=>(dispatch)=>{
    dispatch({type: types.GETTODOSLOADING_P1})

    axios.get("http://localhost:8082/todos_p1")
    .then((res)=>{
        dispatch({type: types.GETTODOSSUCCESS_P1 , payload : res.data})
    })
    .catch((err)=>{

        dispatch({type: types.GETTODOSERROR_P1})
    })


}


export const  addTodos_P1 = (payload)=>(dispatch)=>{
    dispatch({type: types.ADDTODOSLOADING_P1})

    axios.post("http://localhost:8082/todos_p1",payload)
    .then((res)=>{
        dispatch({type: types.ADDTODOSSUCCESS_P1 , payload:res.data})
    })
    .catch((err)=>{
        dispatch({type: types.ADDTODOSERROR_P1})
    })
}



export const updateTodo_P1 = (payload)=>(dispatch)=>{
 const {id, value} = payload;
console.log(id,value ,"what is your name")
 axios.put(`http://localhost:8082/todos_p1/${id}/`,{
    value :value
 }).then((res)=>{

    axios.get("http://localhost:8082/todos_p1")
    .then((res)=>{
        dispatch({type: types.GETTODOSSUCCESS_P1, payload: res.data})
    })
    .catch((err)=>{
        dispatch({type: types.GETTODOSERROR_P1})
    })
 })
 .catch((e)=>{
    console.log(e,"pratice1")
 })

}


export const deleteTodo_P1 = (id)=>(dispatch)=>{

    axios.delete(`http://localhost:8082/todos_p1/${id}/`)
    .then((res)=>{
        dispatch({type: types.DELETETODO_P1 , payload:id})
    })
    .catch((err)=>{
        console.log(err,"deketeTodoP1")
    })

}


export const completeTodo_P1 = (id,status)=>(dispatch)=>{
    console.log(id,status,"this is id ")

    axios.patch(`http://localhost:8082/todos_p1/${id}/`,{
        isCompleted : status
    }).then((res)=>{
        console.log(res.data,"updae data")
        //  dispatch({type: types.COMPLETETODO_P1 , payload: res.data})
        axios.get("http://localhost:8082/todos_p1")
        .then((res)=>{
            dispatch({type: types.GETTODOSSUCCESS_P1, payload:res.data})
        })
        .catch((err)=>{
            dispatch({type: types.GETTODOSERROR_P1})
        })
    })
    .catch((err)=>{

    })
}

//// pratice 1 end here 
