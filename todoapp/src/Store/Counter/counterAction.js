import * as types  from "../Counter/counter.types.js"



export const incrementCounter = ()=>({type:types.COUNTERINCREMENT})
export const decrementCounter = ()=>({type:types.COUNTERDECREMENT})