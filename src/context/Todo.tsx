import React, { useRef, useState } from 'react'
import { useTodo } from './TodoContext'

function Todo() {
  let [range,setRange]=useState<string>('')
  let desc=useRef<HTMLInputElement>(null)
 let x= useTodo()
  
  //this is for range
  function RangeHandler(event: React.ChangeEvent<HTMLInputElement>)
  {
    setRange(event.target.value)
  }
  //submit
  function submitHandler()
  {
    let obj={
        id:new Date().getMilliseconds(),
        text:desc.current!.value,
        range:range
    }
    dispatchEvent()
  }
  return (
    <>
     <input type='text' placeholder='enter desc.'  ref={desc}/>
     <br/>
     <input type='text' placeholder='enter range' onChange={RangeHandler}/>
     <br/>
     <button onClick={submitHandler}>submit</button>
    </>
   
  )
}

export default Todo