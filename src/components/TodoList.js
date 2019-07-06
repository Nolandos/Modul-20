import React from 'react';

const TodoList = ({ data, removeTodo }) => {
    return (
        <ul className="todo-list">
            { data.map(item => 
                <li>
                    { item.text }
                    <button className="btn-del" onClick={removeTodo}>X</button>
                </li>
            ) }
        </ul>
    )
} 

export default TodoList;