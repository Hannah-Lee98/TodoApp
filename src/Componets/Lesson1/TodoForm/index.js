import React from 'react'
import Root from './style'
import Button from '../UIComponent/Button.js'
import Input from '../UIComponent/Input.js'

class TodoForm extends React.Component {
    state = {
        model: null,
    }
    componentDidMount() {
        const { data } = this.props;

        if (data !== null) {
            this.setState({
                model: data ? { ...data } : null,
            })
        }
    }
    componentDidUpdate(preProps) {
        const { data } = this.props;
        if (preProps.data !== data) {
            this.setState({
                model: data ? { ...data } : null,
            })
        }

    }
    handleInput = (event) => {
        const { data } = this.props;
        this.setState({
            model: { ...data, content: event.target.value }
        })
    }
    handleAdd = () => {
        const { onAdd } = this.props;
        const { model } = this.state;
        if (!model) return
        onAdd({
            id: Math.random(),
            content: model.content,
        })
        this.setState({
            model: null,
        })
    }
    handleEdit = async () => {
        const { model } = this.state;
        const { onEdit } = this.props;
        onEdit(model);

    }
    handleCancel = () => {
        this.props.onEdit(null);
    }
    render() {
        const { model } = this.state;
        const { data } = this.props;
        return (
            <Root className="gutter-8">
                <div style={{width: "100%"}}>
                    
                    <Input placeholder="Task" type="text" value={model ? model.content : ''} onChange={this.handleInput} />
                </div>
                <div >
                {!data ?
                    <Button type={'add'} onClick={this.handleAdd}>Add</Button> :
                    <div  style={{display: "flex"}} className='gutter-8'>
                        <Button type={'update'} onClick={this.handleEdit}>Update</Button>
                        <Button type={'cancle'} onClick={this.handleCancel} >Cancel</Button>
                    </div>                  
                }
                </div>
            </Root>
        )
    }
}

export default TodoForm;