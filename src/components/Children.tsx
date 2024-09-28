import React, { PropsWithChildren, ReactNode,FC } from 'react'
// type ChildrenType={
//     name:string,
//     add:string,
//     children:ReactNode
// }

type ChildrenType={
    name:string,
    add:string,
    children:ReactNode
}
//3.

let Children:FC<ChildrenType>=(props:ChildrenType)=> {
    return (
      <div>
          <h1>{props.name} {props.add}</h1>
          {props.children}
      </div>
   
    )
  }
  
  export default Children


//2.
// function Children(props:PropsWithChildren<ChildrenType>) {
//     return (
//       <div>
//           <h1>{props.name} {props.add}</h1>
//           {props.children}
//       </div>
   
//     )
//   }
  
//   export default Children




//1.
// function Children(props:ChildrenType) {
//   return (
//     <div>
//         <h1>{props.name} {props.add}</h1>
//         {props.children}
//     </div>
 
//   )
// }

// export default Children