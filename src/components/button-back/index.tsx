import { connect } from 'react-redux'
import BackButton from './button-back'
import { clearConfig } from '../../../redux/actions/actions'

const mapDispatchToProps = (dispatch: any) => ({
    clearConfig: () => dispatch(clearConfig())
})

const BackButtonContainer = connect(
    null,
    mapDispatchToProps
)(BackButton)

export default BackButtonContainer