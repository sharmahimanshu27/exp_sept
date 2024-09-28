import React, { useState } from 'react'
import PrintComp from './PrintComp'
import { TodoType } from '../utilits'

function State() {
    let [text,setText]=useState<string>('')
    let [data,setData]=useState<TodoType[]>([])
    function changeHandler(event: React.ChangeEvent<HTMLInputElement>)
    {
      setText(event.target.value)
    }
    function clickHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)
    {
        let obj={id:new Date().getMilliseconds(),
            text
        }
        setData((pre)=>[...pre,obj])
    }
    function deleteHandler(id:number)
    {
        setData((pre)=>{
            return pre.filter((item)=>{
                return item.id !=id
            })
        })
    }
  return (
    <div className="container">
        {JSON.stringify(data,null,4)}
        <div className="row d-flex justify-content-center align-items center">
            <h1>todostate</h1>
            <input type="text" placeholder='enter your text' value={text}  onChange={changeHandler}/>
            <br/>
            <button onClick={clickHandler}>click</button>
            <br/>
            <hr/>
            <PrintComp data={data} delete={deleteHandler}/>
        </div>
    </div>
  )
}

export default State