import React from 'react'
import TodoItem from '../TodoItem/'
import Root from './style'

class TodoList extends React.Component {
    render() {
        const { data, onRemove, onEdit, model } = this.props;

        return (
            <Root>
                {data.map(item => <li key={item.id}><TodoItem onRemove={onRemove} data={item} onEdit={onEdit} model={model} /></li>)}
            </Root>
        )
    }
}

export default TodoList;

