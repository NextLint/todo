import { connect } from 'react-redux'
import { changeInputTextAction } from '../../../redux/actions/actions'
import Search from './search-default'

const mapStateToProps = (state: any, props: any) => ({
    currentText: state.todo[`${props.unicName}`]
})

const mapDispatchToProps = (dispatch: any) => ({
    updateText: (text: string, name: string) => dispatch(changeInputTextAction(text, name)),
})

const SearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)

export default SearchContainer