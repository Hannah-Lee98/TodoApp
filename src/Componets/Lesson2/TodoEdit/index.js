import React from 'react'
import Button from '../UIComponent/Button'
import container from './container'

class TodoEdit extends React.Component {
    handleEdit = () => {
        const { data, EditTodo } = this.props;
        EditTodo(data);
    }
    render() {
        const { disabled } = this.props
        return (
            <div>
                <Button type='edit' disabled={disabled} onClick={this.handleEdit}>Edit</Button>
            </div>
        )
    }
}

export default container(TodoEdit)