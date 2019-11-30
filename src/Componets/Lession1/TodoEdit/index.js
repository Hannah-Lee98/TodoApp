import React from 'react'
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
                <Button type='edit' disabled={disabled} onClick={this.handleEdit}>Edit</Button>
            </div>
        )
    }
}

export default TodoEdit;