import { connect } from 'react-redux'
import DateTimePicker from './picker-datetime'
import { setDate } from '../../../redux/actions/actions'

const mapStateToProps = (state: any) => ({
    date: state.todo.date,
})

const mapDispatchToProps = (dispatch: any) => ({
    updateDate: (date: string) => dispatch(setDate(date))
})

const DateTimePickerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DateTimePicker)

export default DateTimePickerContainer