import React,{ComponentPropsWithoutRef} from 'react'

type InputType={
    labal:string,
  id:string  
} & ComponentPropsWithoutRef<'input'>
function Input(props:InputType) {
  return (
    <>
    <label htmlFor={props.id}>{props.labal}</label>
      <input {...props}/>
    </>
   
  )
}

export default Input