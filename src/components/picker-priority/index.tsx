import { connect } from 'react-redux'
import PriorityPicker from './picker-priority'
import { Priority } from '../../../redux/store/state-types'
import { setPriority } from '../../../redux/actions/actions'

const mapStateToProps = (state: any) => ({
    value: state.todo.priority
})

const mapDispatchToProps = (dispatch: any) => ({
    setPriority: (value: Priority) => dispatch(setPriority(value))
})

const PriorityPickerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PriorityPicker)

export default PriorityPickerContainer