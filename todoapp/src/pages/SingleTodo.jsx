import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const SingleTodo = () => {
    const {data:todos, addTodos:aTodo, getTodos:gTodo } = useSelector((state)=>state.todo)
    const dispatch = useDispatch()
    const {id} = useParams()
    const [newTodo, setCurrentTodo] = useState({})

    useEffect(()=>{
   let  newTodo = todos.find((item)=>{
    // console.log(item,"item",Number(id.id),"id")
    if(item.id === Number(id)){
        return item
    }
  
   } )
   console.log(newTodo,"111")
   setCurrentTodo(newTodo)

    },[todos,id])
   
  return (
    <div>
      <h1>single todo page</h1>
      <h1>{newTodo.value}</h1>
    </div>
  )
}

export default SingleTodo
