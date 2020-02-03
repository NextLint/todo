import { connect } from 'react-redux'
import DrawerMenu from './drawer-menu'

const mapStateToProps = (state: any) => ({
    theme: state.theme.theme,
})

const DrawerContainer = connect(
    mapStateToProps,
    null
)(DrawerMenu)

export default DrawerContainer