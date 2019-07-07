import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import { hot } from 'react-hot-loader';

import Title from '../components/Title';
import TodoList from '../components/TodoList';

class App extends React.Component {
    //Deklaracja stanu
    state = {
            data: [{
                    id: 1,
                    text: 'clean room'
                }, {
                    id: 2,
                    text: 'wash the dishes'
                }, {
                    id: 3,
                    text: 'feed my cat'
            	}, {
                    id: 4,
                    text: 'go run'
                }]
        };
    
    //Dodawanie taska
    addTodo = val => {
        const todo = {
            text: val,
            id: uuid.v4()
        };
        const data = [...this.state.data, todo];
        this.setState({ data });
  };

  //Usuwanie taska
  removeTodo = id => {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({ data: remainder });
  };

    //Render aplikacji 
    render() {
        const { data } = this.state;
        return (
            <div className={style.TodoApp}>
                <Title data = { data }/>
                <TodoList 
                    key = {data.id}
                    data = { data }
                    removeTodo={this.removeTodo}
                />
            </div>
        );
    }
}

export default hot(module)(App);