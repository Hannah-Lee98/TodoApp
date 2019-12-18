import React from 'react'
import TodoDelete from '../TodoDelete/'
import TodoEdit from '../TodoEdit/'
import Root from './style'
import P from '../UIComponent/P'
import container from './container'

class TodoItem extends React.Component {
    render() {
        const { data, model } = this.props;
        const isEdit = model && model.id === data.id
        return (
            <Root >
                <div style={{ width: "100%" }}>
                    <P>{data.content}</P>
                </div>
                <div style={{ display: "flex" }} className="gutter-8">
                    <TodoDelete disabled={isEdit} data={data} />
                    <TodoEdit disabled={isEdit} data={data} />
                </div>

            </Root>
        )
    }
}

export default container(TodoItem);