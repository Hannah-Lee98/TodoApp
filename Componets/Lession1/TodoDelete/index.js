import React from 'react'
import Button from '../UIComponent/Button'

class TodoDelete extends React.Component {
    handleDelete = () => {
        const { data, onRemove } = this.props;
        onRemove(data.id);
    }
    render() {
        const { disabled } = this.props;
        return (
            <div>
                <Button type={'delete'} disabled={disabled} onClick={this.handleDelete}>Delele</Button>
                
            </div>
        )
    }
}

export default TodoDelete;