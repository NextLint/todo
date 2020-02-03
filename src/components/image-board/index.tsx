import { connect } from 'react-redux'
import ImageBoard from './image-board'
import { deleteImgae } from '../../../redux/actions/actions'

const mapStateToProps = (state: any) => ({
    images: state.todo.images
})

const mapDispatchToProps = (dispatch: any) => ({
    deleteImage: (id: string) => { dispatch(deleteImgae(id)) }
})

const ImageBoardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageBoard)

export default ImageBoardContainer