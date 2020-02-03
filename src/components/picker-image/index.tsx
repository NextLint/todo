import { connect } from "react-redux"
import ImagesPicker from "./picker-image"
import { attachImage } from "../../../redux/actions/actions"

const mapDispatchToProps = (dispatch: any) => ({
    attachImage: (uri: string) => { dispatch(attachImage(uri)) }
})

const ImagePickerContainer = connect(
    null,
    mapDispatchToProps
)(ImagesPicker)

export default ImagePickerContainer