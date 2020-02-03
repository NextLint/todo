import { connect } from 'react-redux'
import SettingsScreen from './settings-screen'

const mapStateToProps = (state: any) => ({
    theme: state.theme.theme,
})

const SettingsScreenContainer = connect(
    mapStateToProps,
    null
)(SettingsScreen)

export default SettingsScreenContainer