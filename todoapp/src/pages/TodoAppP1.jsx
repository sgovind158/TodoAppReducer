import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import * as types   from  "../Store/Todos/todoAction"
const TodoAppP1 = () => {
    // const ref = useRef()
    const dispatch = useDispatch()
    const {data:todos, getTodos:gTodo, addTodo:aTodo} = useSelector((state)=> state.todo)
    const [addTodo,setAddTodo] = useState("")

  const addtodoP1 = (value)=>{
   
    dispatch(types.addTodos_P1({
          value: value,
          isCompleted : false
    }))

   setAddTodo("")

  }

  const deleteTodoP1 = (id)=>{
    dispatch(types.deleteTodo_P1(id))
  }

const toggleTaskStutus = (id,value)=>{
   
    dispatch(types.completeTodo_P1(id,value))
}


  useEffect(()=>{
    dispatch(types.getTodos_P1())
  },[])
  console.log(todos)
  return (
    <>
    <div>
      <h1>TodoAppP1</h1>

      <input type="text"  onChange={(e)=>setAddTodo(e.target.value)}  placeholder="enter here todo pratice 1 "/>
      <button onClick={(e)=>addtodoP1(addTodo)}>Add pratice1 </button>
    </div>

    {todos.map((todo)=>{
        return(
          <div key={todo.id}  >
            <Link to={`/todo_p1/${todo.id}`}>
        <h1  style= {{textDecoration : todo.isCompleted ? "line-through" : ""}}>{todo.value}</h1>

        </Link>
          <input type="checkbox"  checked={todo.isCompleted}
              onChange={() => toggleTaskStutus(todo.id, !todo.isCompleted)}
              style={{ textDecorationLine: "line-through" }}   />

          <Link to={`/todo_p1/${todo.id}/edit`}>
         <button>Edit page pratice1 </button>
         </Link>
         <button  onClick={()=>deleteTodoP1(todo.id)}> Delete Page pratice1 </button>
          
      </div>

        )
      
      

    })}

    </>
  )
}

export default TodoAppP1
