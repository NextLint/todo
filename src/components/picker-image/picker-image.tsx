import React, { useState } from 'react'
import {
    Container,
    Title,
    Button
} from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import ImagePicker from 'react-native-image-picker'
import ImageBoardContainer from '../image-board'
import { withTheme } from 'styled-components'

interface IImagePickerProps {
    title: string,

    attachImage(uri: string): void,
}

const options = {
    title: 'Прикрепить фото',
    takePhotoButtonTitle: 'Сделать фото',
    chooseFromLibraryButtonTitle: 'Выбрать из галереи',
    cancelButtonTitle: 'Отмена',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
}

const ImagesPicker = (props: IImagePickerProps) => {

    const handleChooseImage = () => {
        ImagePicker.showImagePicker(options, (response: any) => {
            console.log('Response = ', response);

            if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                // const source = { uri: response.uri };
                props.attachImage(response.uri)
            }
        });
    }

    return (
        <Container>
            <Title>{props.title}</Title>

            <ImageBoardContainer />

            <Button onPress={handleChooseImage} >
                <Icon name="panorama" size={30} color={props.theme.PRIMARY_TEXT_COLOR} />
            </Button>
        </Container>
    )
}

export default withTheme(ImagesPicker)