import {connect} from 'react-redux'

const mapStatetoProps = (state)=>({
    todoList: state.todoList,
})

export default connect(mapStatetoProps);