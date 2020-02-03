import { connect } from 'react-redux'
import ListTasks from './list-tasks'
import { taskCompleted, deleteTask, loadTask } from '../../../redux/actions/actions'
import { getVisibleTasks, search } from '../../../utils/todoHelp'
import { getTodayTasks } from '../../../utils/dateParser'

const mapStateToProps = (state: any, props: any) => ({
    tasks: (props.forToday)
    ?
    getVisibleTasks(search(state.todo[`${props.searchName}`], getTodayTasks(state.todo.tasks)), state.visibilityFilter.filter)
    :
    getVisibleTasks(search(state.todo[`${props.searchName}`], state.todo.tasks), state.visibilityFilter.filter)
})

const mapDispatchToProps = (dispatch: any) => ({
    taskCompleted: (id: string) => dispatch(taskCompleted(id)),
    deleteTask: (id: string) => dispatch(deleteTask(id)),
    loadTask: (id: string) => dispatch(loadTask(id))
})

const ListTasksContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListTasks)

export default ListTasksContainer