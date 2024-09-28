import React, { PropsWithChildren,FC} from 'react'

// //1.
// function Props({username,add,sal,age}:{username:string,add:string ,sal:string,age:string}) {
//   return (
//      <>
//      <h1>hello i am {username} and i am from {add} and my sal is {sal} and i am {age} of old</h1>
//      </>
//   )
// }

// export default Props

// //2.
// type PropsType={username:string,add:string ,sal:string,age:string}
// function Props({username,add,sal,age}:PropsType) {
//     return (
//        <>
//        <h1>hello i am {username} and i am from {add} and my sal is {sal} and i am {age} of old</h1>
//        </>
//     )
//   }
  
//   export default Props


//3.
// interface PropsType{username:string,add:string ,sal:string,age:string}

// function Props({username,add,sal,age}:PropsType) {
//        return (
//            <>
//            <h1>hello i am {username} and i am from {add} and my sal is {sal} and i am {age} of old</h1>
//            </>
//         )
//       }



//   export default Props


//4.
// interface PropsType{username:string,add:string ,sal:string,age:string}

// function Props({username,add,sal,age}: PropsWithChildren<PropsType> ) {
//        return (
//            <>
//            <h1>hello i am {username} and i am from {add} and my sal is {sal} and i am {age} of old</h1>
//            </>
//         )
//       }
//       export default Props




//5

interface PropsType{username:string,add:string ,sal:string,age:string}

let  Props:FC<PropsType>=({username,add,sal,age}  )=> {
       return (
           <>
           <h1>hello i am {username} and i am from {add} and my sal is {sal} and i am {age} of old</h1>
           </>
        )
      }
      export default Props

