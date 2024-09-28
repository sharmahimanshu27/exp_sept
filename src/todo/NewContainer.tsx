import React from 'react'
import Input from './Input'
import Button from './Button'

function Container() {
  return (
      <>
      <h1>hello i am container </h1>
      <hr/>
      <Input type="text" placeholder="enter your username" id="usrname" labal="username"   />
      <br/>
      {/* <Button value="register"/> */}
      <br/>
      <Input   type="password" placeholder="enter your password" id="pass" labal="password"/>
      </>
  )
}

export default Container