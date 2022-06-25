import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import * as types  from "../Store/Todos/todoAction"

const ShowUncomplete = () => {
  const {data:todos, addTodos:aTodo, getTodos:gTodo } = useSelector((state)=>state.todo)
  const dispatch = useDispatch()
  console.log(todos,"show complete")

  useEffect(()=>{
    dispatch( types.getTodos())   
   },[])
  return (
    <div>
      <h1>ShowComplete</h1>

      {todos.map((todo)=>{
        if(todo.isCompleted === false){
          return (
           
             <div key={todo.id}>
              <h1 key={todo.id} > {todo.value}</h1>
              </div>
            
          )
        }
      })}
    </div>
  )
}

export default ShowUncomplete
