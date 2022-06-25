import React ,{useEffect,useRef} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as types  from "../Store/Todos/todoAction"
import { useState } from 'react'
const TodoApp = () => {
    const dispatch = useDispatch()
    const {data:todos, addTodos:aTodo, getTodos:gTodo } = useSelector((state)=>state.todo)
    // localStorage.setItem("todoArr",JSON.stringify(todos))
    console.log(todos,"apptodoline no 10")
    const ref = useRef()
    const [value ,setUpDate] = useState("")
    let navigate = useNavigate()
    const {loading : addButtonLoading} = useSelector((state)=>state.todo.addTodos)
    useEffect(()=>{
     dispatch( types.getTodos())   
    },[])

const addNew = ()=>{
    let value = ref.current.value;

    dispatch(types.addTodos({
          value:value,
          isCompleted: false
    }))

    ref.current.value = null
}

const deleteTodoData = (id)=>{
    dispatch(types.deleteTodo(id))
}

const toggleTaskStutus = (id, status)=>{
    dispatch(types.completeTodo(id,status))
}

const EditTodo = (id,value)=>{
    dispatch(types.updateTodo({id,value }))
}

if(gTodo.loading){
    return <h1>Loading.........</h1>
} else if(gTodo.error){
    return <h1>error.....</h1>
}

  return (
    <>
      <h1>TodoApp</h1>
      <div>
     <input type="text "  placeholder='enter here anything ' ref={ref}/>
     <button onClick={()=>addNew()} disabled={addButtonLoading}>+</button>
    </div>
    <br />
    <br />
    <br />
    {
        todos.map((todo)=>{
            return(
                <div key={todo.id}>
                    <div style={{textDecoration: todo.isCompleted ? 'line-through' : 'none'}}>{todo.value}</div>
                   <button onClick={()=>deleteTodoData(todo.id)}>Delete</button>

              <div>

                {todo.isCompleted}
                <input type="text"  value={value} onChange={(e)=>setUpDate(e.target.value)}  placeholder='update'  />
              
                <button  onClick={()=>EditTodo(todo.id,value)} >Edit</button>
              
              </div>
              
              <input type="checkbox"  checked = {todo.isCompleted} onChange ={()=>toggleTaskStutus(todo.id,!todo.isCompleted)}  style={{ textDecorationLine: 'line-through' }} />
                </div>

               
            )
        })
    }
    
    </>
  
  )
}

export default TodoApp
