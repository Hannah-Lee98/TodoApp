import React from 'react'
import TodoItem from '../TodoItem/'
import Root from './style'
import container from './container'

class TodoList extends React.Component {
    render() {
        const { todoList } = this.props;
        return (
            <Root>
                {todoList.map(item => <li key={item.id}><TodoItem data={item} /></li>)}
            </Root>
        )
    }
}

export default container(TodoList);

