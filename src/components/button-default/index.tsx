import { connect } from 'react-redux'
import Button from './button'
import { addTask, changeTask } from '../../../redux/actions/actions'

const mapDispatchToProps = (dispatch: any) => ({
    addTask: () => dispatch(addTask()),
    changeTask: (id: string) => dispatch(changeTask(id))
})

const ButtonContainer = connect(
    null,
    mapDispatchToProps
)(Button)

export default ButtonContainer