import React from 'react'
import TodoList from '../TodoList/'
import TodoForm from '../TodoForm/'
import Root from './style'

class TodoApp extends React.Component {
    render() {
        return (
            <Root>
                <div><h1>ToDo:</h1></div>
                <TodoForm />
                <TodoList />
            </Root>
        )
    }
}

export default TodoApp;

