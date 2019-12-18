import { connect } from 'react-redux'

const mapStateToProps = state => ({
    model: state.model
})

export default connect(mapStateToProps)