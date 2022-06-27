import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import * as types from "../Store/Todos/todoAction"

const EditPageP1 = () => {

 const distpatch = useDispatch()
 const {data: todos, getTodos: gTodos , addTodos: aTodos} = useSelector((state)=>state.todo)
 const {id} = useParams()
 console.log(id,"useparam")
 const [edit ,setEdit] = useState("")
 const navigate = useNavigate()


const upDataTodo = (id,value)=>{
   
    distpatch(types.updateTodo_P1({id,value}))
    navigate("/todoAppP1")
}

  return (
    <div>

    

      <h1>Edit page pratice 1</h1>
      <input value={edit} type="text" onChange={(e)=>setEdit(e.target.value)}  placeholder="update todo pratice 1"/>
      <button onClick={()=>upDataTodo(Number(id), edit)} >Update</button>
    </div>
  )
}

export default EditPageP1
