import { connect } from 'react-redux'
import ScreenHeader from './screen-header'

const mapStateToProps = (state: any) => ({
    theme: state.theme.theme,
})

const ScreenHeaderContainer = connect(
    mapStateToProps,
    null
)(ScreenHeader)

export default ScreenHeaderContainer