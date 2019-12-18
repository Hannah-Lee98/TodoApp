import { connect } from 'react-redux'
import { DeleteTodo } from '../../../Actions/todo'

const mapDispatchToStores = dispatch => ({
    DeleteTodo: item => dispatch(DeleteTodo(item))
})
export default connect(null, mapDispatchToStores);