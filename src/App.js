import React, {useState, useRef, useEffect} from 'react'
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid'

const LOCAL_STORAGE_KEY = "HELLO WORLD"

function App() {
  const [todos,setTodos] = useState([{id: 1,name: 'Todo 1', completed: false}])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos){ setTodos(storedTodos) }
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
  },[todos])

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.completed = !todo.completed
    setTodos(newTodos)
  }

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

  function handleClearTodos(){
    const newTodos = todos.filter(todo => todo.completed)
    setTodos(newTodos)
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text"></input>
      <button onClick={handleAddTodo} >Add Todo</button>
      <button onClick={handleClearTodos}>Clear Complete</button>
      <div>{todos.filter(todo => !todo.completed).length} left to do</div>
    </>
  )
}

export default App;
