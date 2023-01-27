import React from 'react'

export default function Todo({todo, toggleTodo}) {
    function handleClickTodo(){
        toggleTodo(todo.id)
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.completed} onChange={handleClickTodo}></input>
                {todo.name}
            </label>
        </div>
    )
}
