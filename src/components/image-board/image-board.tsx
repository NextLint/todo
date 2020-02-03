import React, { useState } from 'react'
import {
    BackArea,
    Container
} from './styles'
import { IImages } from '../../../redux/store/state-types'
import ImageDefault from '../image-default'

interface IImageBoardProps {
    images?: IImages[],

    deleteImage(id: string): void
}

const ImageBoard = (props: IImageBoardProps) => {

    const [isFocused, setFocus] = useState(false)

    const renderImages = () => {
        return (
            // @ts-ignore
            props.images.map((img, index) => {
                return (
                    <ImageDefault
                        id={img.id}
                        uri={img.uri}
                        isFocused={isFocused}
                        key={index}
                        setFocus={setFocus}
                        deleteImage={props.deleteImage} />
                )
            })
        )
    }

    return (
        <BackArea
            style={(!isFocused) ? { display: 'none' } : null}
            onPress={ () => { setFocus(false) } } >

            <Container>
                {renderImages()}
            </Container>
            
        </BackArea>
    )
}

export default ImageBoard