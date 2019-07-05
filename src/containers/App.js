import React from 'react';
import uuid from 'uuid';
import style from './App.css';

import Title from '../components/Title';

class App extends React.Component {
    //Deklaracja stanu
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }
    
    //Dodawanie taska
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    //Usuwanie taska
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    //Render aplikacji 
    render() {
        const { data } = this.state;
        return (
            <div className={style.TodoApp}>
                <Title data = { data }/>
                Tutaj pojawią się komponenty naszej aplikacji.
            </div>
        );
    }
}

export default App;