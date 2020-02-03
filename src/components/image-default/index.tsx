import React from 'react'
import {
    Container,
    Photo,
    Cancel
} from './style'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { withTheme } from 'styled-components'

interface IImageDefaultProps {
    id: string,
    uri: string,
    isFocused: boolean,
    setFocus(value: boolean): void,
    deleteImage(id: string): void
}

const ImageDefault = (props: IImageDefaultProps) => {

    const handleDeletingImage = () => {
        props.deleteImage(props.id)
    }

    return (
        <Container
            style={(props.isFocused) ? { borderWidth: 2 } : null}
            onLongPress={() => props.setFocus(true)} >

            <Photo source={{ uri: props.uri }} />
            {props.isFocused && <Cancel onPress={handleDeletingImage} >
                <Icon
                    name="clear"
                    size={15}
                    color={props.theme.PRIMARY_BACKGROUND_COLOR}
                />
            </Cancel>}

        </Container>
    )
}

export default withTheme(ImageDefault)