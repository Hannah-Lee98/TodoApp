import React from 'react'
import Button from '../UIComponent/Button'
import container from './container'

class TodoDelete extends React.Component {
    handleDelete = () => {
        const { data } = this.props;
        this.props.DeleteTodo(data);
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

export default container(TodoDelete);