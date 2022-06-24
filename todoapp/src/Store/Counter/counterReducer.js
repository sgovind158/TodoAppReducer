import * as types  from "../Counter/counter.types.js"

let initState = {
    count : 0
}

export const counterReducer = (state = initState, action)=>{
    let {type,payload} = action
    console.log(type)
    switch(type){

        case types.COUNTERINCREMENT :{

            return  {
                
                   ...state,
                   count : state.count + 1
            }
        }

        case types.COUNTERDECREMENT :{
             if(state.count > 0){
                return  {
                    ...state,
                    count : state.count - 1
             }

             }
           
        }
        default :{
            return state
        }
    }
}