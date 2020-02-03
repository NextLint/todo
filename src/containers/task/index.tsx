import { connect } from 'react-redux'
import TaskScreen from './task-screen'

const mapStateToProps = (state: any) => ({
    theme: state.theme.theme,
})

const TaskScreenContainer = connect(
    mapStateToProps,
    null
)(TaskScreen)

export default TaskScreenContainer