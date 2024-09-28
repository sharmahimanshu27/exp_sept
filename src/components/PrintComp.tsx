import React from 'react'
import { TodoType } from '../utilits'
import MsgBox from './MsgBox';

type PrintType={
    data:TodoType[],
    delete:(id:number)=>void
}
function PrintComp(props:PrintType) {
    let template=null;
    if(props.data.length==0)
    {
        //add atleast one target ,green
        template= <MsgBox type="info" msg="add atleast one target"/>
    }
    if(props.data.length>1 &&props.data.length<5)
    {
        template=<MsgBox type="war" pro="low" msg="focous on only one tech "/>
        //focous on only one tech //yellow
    }
    if(props.data.length>5)
    {
        template=<MsgBox type="war" pro="high" msg="you are no ai work one at a time"/>
        //you are no ai work one at a time //red
    }
  return (
      <>
      {template}
      {props.data.length==0 && <h1>add todo</h1>}
      {props.data.length>0 && props.data.map((item)=>{
        return  <div className="card" key={item.id}>
        <div className="card-body">
            <h1>{item.text}</h1>
            <button onClick={()=>{
                props.delete(item.id)
            }}>del</button>
        </div>
      </div>
      })}
      
      </>
  )
}

export default PrintComp