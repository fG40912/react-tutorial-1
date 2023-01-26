import React, {useRef, useState} from 'react'
import TodoList from "./TodoList";

function App() {
  const [todos,setTodos] = useState([{id: 1,name: 'Todo 1', completed: false}])
  const todoNameRef = useRef()

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if(name === "") return
    else console.log(name)
  }

  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text"></input>
      <button onClick={handleAddTodo} >Add Todo</button>
      <button>Clear Complete</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
