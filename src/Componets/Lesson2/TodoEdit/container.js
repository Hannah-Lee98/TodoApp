import { connect } from 'react-redux'
import { EditTodo } from '../../../Actions/todo'

const mapDispatchToStores = dispatch=>({
    EditTodo: item => dispatch(EditTodo(item))
})

export default connect(null, mapDispatchToStores);