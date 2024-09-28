import React, { createContext,useContext,useReducer } from 'react'
import Todo from './Todo'
export interface todotype{
    id:number,
    range:string,
    text:string
}
export type rangecontext={
      todo:todotype[]  
}
export type actiontype= {type:'add',payload:todotype} | {type:'del',payload:number}
function reducer(state:rangecontext,action:actiontype)
{
     if(action.type=="add")
     {
         return {...state,todo:[...state.todo,action.payload]}
     }
     else if(action.type=="del")
     {
        return state
     }
     else{
        return state
     }
}
export let rangeContext= createContext<rangecontext | null>(null)
function TodoContext() {
    let initalState:rangecontext={
        todo:[]
    }
    
  let[state,dispatch] = useReducer(reducer,initalState)

  function addHandler(arg:todotype)
  {
     dispatch({type:"add",payload:arg})
  }
  let contextInitalValue={
    todo:state.todo,   
}
  return (
    <rangeContext.Provider value={contextInitalValue}>
        <Todo/>
    </rangeContext.Provider>
    
  )
}

//custom hook
export let useTodo=()=>{
    return useContext(rangeContext)
}
export default TodoContext