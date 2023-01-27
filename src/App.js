import React, {useRef, useState} from 'react'
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [todos,setTodos] = useState([{id: 1,name: 'Todo 1', completed: false}])
  const todoNameRef = useRef()

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if(name === "") return
    else{
      setTodos(prevTodos => {
        return [...prevTodos,{
          id: uuidv4(),
          name: name,
          completed: false
        }]
      })
    }
    todoNameRef.current.value = null
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
