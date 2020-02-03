import { connect } from 'react-redux'
import SettingTheme from './setting-theme'
import { changeTheme } from '../../../redux/actions/actions'

const mapStateToProps = (state: any) => ({
    palette: state.theme.palette
})

const mapoDispatchToProps = (dispatch: any) => ({
    updateTheme: (id: string) => dispatch(changeTheme(id))
})

const SettingThemeContainer = connect(
    mapStateToProps,
    mapoDispatchToProps
)(SettingTheme)

export default SettingThemeContainer