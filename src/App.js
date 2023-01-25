import TodoList from "./TodoList";

function App() {
  return (
    <>
      <TodoList />
      <input type="text"></input>
      <button>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
