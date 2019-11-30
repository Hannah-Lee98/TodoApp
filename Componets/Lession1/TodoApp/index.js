import React from 'react'
import TodoList from '../TodoList/'
import TodoForm from '../TodoForm/'
import Root from './style'

class TodoApp extends React.Component {
    state = {
        todoList: [{
            id: 12,
            content: "hello world",
        }],
        model: null,
    }

    add = (item) => {
        this.setState((state) => ({
            todoList: [...state.todoList, item],
        }))
    }
    remove = (id) => {
        this.setState((state) => ({
            todoList: state.todoList.filter(item => item.id !== id)
        }))
    }
    edit = (item) => {
        this.setState({
            model: item,
        })
    }
    update = (model) => {
        //để cancel 
        if (!model) {
            this.setState({ model: null })
            return
        }

        this.setState((state) => {
            const { todoList } = state;
            const todoListTemp = todoList.slice()
            const index = todoList.findIndex(item => item.id === model.id)
            todoListTemp[index] = model;
            return (
                {
                    todoList: todoListTemp,
                    model: null,
                }
            )


        })
    }

    render() {
        const { todoList, model } = this.state;
        return (
            <Root>
                <TodoForm data={model} onAdd={this.add} onEdit={this.update}/> 
                <TodoList onRemove={this.remove} data={todoList} onEdit={this.edit} model={model} />
            </Root>
        )
    }
}

export default TodoApp;

