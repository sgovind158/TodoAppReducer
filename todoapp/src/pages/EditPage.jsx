import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import * as types  from "../Store/Todos/todoAction"


const EditPage = () => {
    const  {id}  = useParams()
    const dispatch = useDispatch()
    const {data:todos, addTodos:aTodo, getTodos:gTodo } = useSelector((state)=>state.todo)
    const [editTodo ,setUpDate] = useState("")
    const navigate = useNavigate()
  
    const EditTodo = (id,value)=>{
        dispatch(types.updateTodo({id,value }))
        navigate("/todoApp")
    }


  return (
    <div>
      <h1>Edit Page </h1>

      <input type="text"  value={editTodo} onChange={(e)=>setUpDate(e.target.value)}  placeholder='update'  />
              

      <button  onClick={()=>EditTodo(Number(id),editTodo)} >Edit</button>
    </div>
  )
}

export default EditPage
