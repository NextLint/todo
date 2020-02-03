import { connect } from 'react-redux'
import TaskInput from './task-input'
import { changeInputTextAction } from '../../../redux/actions/actions'

const mapStateToProps = (state: any, props: any) => ({
    currentText: state.todo[`${props.unicName}`]
})

const mapDispatchToProps = (dispatch: any) => ({
    updateText: (text: string, name: string) => dispatch(changeInputTextAction(text, name)),
})

const TaskInputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskInput)

export default TaskInputContainer