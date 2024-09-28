import React, { useRef } from 'react'
function Newspaper() {
    let inputRef=useRef<HTMLInputElement>(null)
    function submitHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)
    {
        let data=inputRef.current!.value
        data?alert(data):console.log('somthing wrong ')
        
    }
  return (
    <div>

        <input type="text" placeholder='sub. my paper' ref={inputRef}/>
        <button  onClick={submitHandler}>submit</button>
    </div>
  )
}

export default Newspaper