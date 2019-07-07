import React from 'react';
import style from './TodoList.css';

const TodoList = ({ data, removeTodo }) => {
    return (
        <ul className={style.TodoList}>
            { data.map(item => 
                <li>
                    { item.text }
                    <button className={style.buttonDel} onClick={ () => removeTodo(item.id) }>X</button>
                </li>
            ) }
        </ul>
    )
} 

export default TodoList;