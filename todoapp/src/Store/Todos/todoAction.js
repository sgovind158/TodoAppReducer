

import * as types  from "../Todos/action.types"
import axios from "axios"


export const getTodos = ()=>(dispatch)=>{
    dispatch({type:types.GETTODOSLOADING})

    axios.get("http://localhost:8080/todos")
    .then((res)=>{
        dispatch({type : types.GETTODOSSUCCESS , payload : res.data})
    })
     .catch((error)=>{
        dispatch({type: types.GETTODOSERROR})
     })

}


export const addTodos = (payload)=>(dispatch)=>{
    dispatch({type: types.ADDTODOSLOADING})

    axios.post("http://localhost:8080/todos",payload)
    .then((res)=>{
        dispatch({type:types.ADDTODOSSUCCESS ,payload:res.data})
    })
    .catch((error)=>{
        dispatch({type:types.ADDTODOSERROR})
    })

}


export const updateTodo = (payload)=>(dispatch)=>{
    const {id,value} = payload;

    axios.put(`http://localhost:8080/todos/${id}/`,{
        value
    }).then((res)=>{
        
    axios.get("http://localhost:8080/todos")
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

    axios.delete(`http://localhost:8080/todos/${id}/`)
    .then((res)=>{
    
        dispatch({type : types.DELETETODO ,payload:id})
    }).catch((error)=>{
        console.log(error)
    })
    
}

export const completeTodo = (id)=>(dispatch)=>{
   
  

    // const {id,  upDate} = payload;
    axios.get(`http://localhost:8080/todos/${id}/`,).then(res => {
        dispatch({type:types.COMPLETETODO ,payload:id})
    
    console.log(res.data);
}).catch(error => {

    console.log(error);
});
    
}