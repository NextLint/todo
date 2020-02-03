import { connect } from 'react-redux'
import TodayScreen from './today-screen'

const mapStateToProps = (state: any) => ({
    theme: state.theme.theme,
})


const TodayScreenContainer = connect(
    mapStateToProps,
    null
)(TodayScreen)

export default TodayScreenContainer