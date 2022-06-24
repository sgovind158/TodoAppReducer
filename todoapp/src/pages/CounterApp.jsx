import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { decrementCounter, incrementCounter } from '../Store/Counter/counterAction'
const CounterApp = () => {
    const count  = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()
    console.log(count)
  return (
    <div>
      <h1>counter app</h1>
      <h1>counter : {count}</h1>
      <button onClick={()=>dispatch(incrementCounter())}>+</button>
      <button onClick={()=>dispatch(decrementCounter())}>-</button>
    </div>
  )
}

export default CounterApp
