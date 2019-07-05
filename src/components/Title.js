import React from 'react';

const Title = ({ data }) => {
    return (
        <div class="header">
            <h1>Todo App</h1>
            <h2>Ilość zadań: { data.length }</h2>
        </div>
    )
} 

export default Title;
