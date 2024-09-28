import React from 'react';
import logo from './logo.svg';
import './App.css';
import Props from './components/Props';
import Children from './components/Children';
import List from './components/List';
import State from './components/State';
import Newspaper from './todo/Newspaper';
import Container from './todo/NewContainer';
import Todo from './context/Todo';
import TodoContext from './context/TodoContext';
 

function App() {
  return (
    <div className="App">
       {/* <Props username="utsav" add="delhi" sal="10k" age="x"/> */}
       {/* <Children name="utsav" add="delhi"> */}
        {/* <List/> */}
        {/* jfdskjfs  //React NODE */}
       {/* </Children> */}
         {/* <State/> */}
         {/* <Newspaper/> */}
         {/* <Container/> */}
          {/* <Todo/> */}
          <TodoContext/>
        
    </div>
  );
}

export default App;
