import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { EditTodo, AddTodo, UpdateTodo, UpdateInput } from '../../../Actions/todo'

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ AddTodo, EditTodo, UpdateTodo, UpdateInput }, dispatch)
}
const mapStateToProps = state => ({
    model: state.model,
    modelInput: state.modelInput
});

export default connect(mapStateToProps, mapDispatchToProps);