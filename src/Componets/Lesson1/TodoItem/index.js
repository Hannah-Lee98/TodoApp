import React from 'react'
import TodoDelete from '../TodoDelete/'
import TodoEdit from '../TodoEdit/'
import Root from './style'
import P from '../UIComponent/P'

class TodoItem extends React.Component {
    render() {
        const { data, onRemove, onEdit, model } = this.props;
        const isEdit = model && model.id === data.id
        return (
            <Root >               
                <div style={{width:"100%"}}>
                    <P>{data.content}</P>
                </div>
                <div style={{display:"flex"}} className="gutter-8">
                    <TodoDelete disabled={isEdit} onRemove={onRemove} data={data} />
                    <TodoEdit disabled={isEdit} onEdit={onEdit} data={data} onClick={this.handleClick} />
                </div>

            </Root>
        )
    }
}

export default TodoItem;