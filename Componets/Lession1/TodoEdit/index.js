import React from 'react'
import Root from "./style"
import Button from '../UIComponent/Button'

class TodoEdit extends React.Component {
    handleEdit = () => {
        const { data, onEdit } = this.props;
        onEdit(data);
    }
    render() {
        const { disabled } = this.props
        return (
            <div>
                <Button disabled={disabled} onClick={this.handleEdit}>Edit</Button>
            </div>
        )
    }
}

export default TodoEdit;