import React from 'react'
type infotype={
msg:string,
type:string
}
type wartype={
    pro:"low" | "high"
}&infotype
function MsgBox(props:infotype | wartype) {
   if (props.type=="info")
   {
    return <div>{props.msg}</div>
   }

   //type guarding
  if("pro" in props)
  {
    return <div>{props.msg} {props.pro}</div>
  }
  return null
}

export default MsgBox