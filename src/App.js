import React from 'react'
import TodoList from "./TodoList";

function App() {
  const [_todos,_setTodos] = useState(['todo 1','todo 2'])
  return (
    <>
      <TodoList todos={_todos} />
      <input type="text"></input>
      <button>Add Todo</button>
      <button>Clear Complete</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
