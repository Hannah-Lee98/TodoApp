import React from 'react'
import Root from './style'
import Button from '../UIComponent/Button.js'
import Input from '../UIComponent/Input.js'
import container from './container'
import { UpdateTodo } from '../../../Actions/todo'

class TodoForm extends React.Component {
    componentDidMount() {
        const { model } = this.props;
        if (model !== null) {
            model && UpdateTodo(model.content)
        }
    }
    componentDidUpdate(preProps) {
        const { model } = this.props;
        if (preProps.model !== model) {
            model && UpdateTodo(model.content)
        }
    }
    handleInput = (event) => {
        const { UpdateInput } = this.props;
        UpdateInput(event.target.value)
    }
    handleAdd = () => {
        const { AddTodo, modelInput } = this.props
        modelInput.trim() ? AddTodo({
            id: Math.random(),
            content: modelInput.trim()
        }) : this.props.EditTodo(null)
    }
    handleUpdate = async () => {
        const { UpdateTodo } = this.props;
        UpdateTodo();
    }
    handleCancel = () => {
        this.props.EditTodo(null);
    }
    render() {
        const { model, modelInput } = this.props;
        return (
            <Root className="gutter-8">
                <div style={{ width: "100%" }}>
                    <Input placeholder="Task" type="text" value={modelInput ? modelInput : ''} onChange={this.handleInput} />
                </div>
                <div >
                    {!model ?
                        <Button type={'add'} onClick={this.handleAdd}>Add</Button> :
                        <div style={{ display: "flex" }} className='gutter-8'>
                            <Button type={'update'} onClick={this.handleUpdate}>Update</Button>
                            <Button type={'cancle'} onClick={this.handleCancel} >Cancel</Button>
                        </div>
                    }
                </div>
            </Root>
        )
    }
}

export default container(TodoForm)