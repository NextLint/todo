import { connect } from 'react-redux'
import { changeTheme } from '../../../redux/actions/actions'
import AllScreen from './all-screen'

const mapStateToProps = (state: any) => ({
    theme: state.theme.theme
})

const mapDispatchToProps = (dispatch: any) => ({
    changeTheme: (baseTheme: string) => dispatch(changeTheme(baseTheme))
})

const AllScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AllScreen)

export default AllScreenContainer