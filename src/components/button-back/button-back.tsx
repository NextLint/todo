import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Button } from './styles'
import { withTheme } from 'styled-components'

interface IBackButtonProps {
    navigation: any,

    clearConfig(): void,
}

const BackButton = (props: IBackButtonProps) => {

    const handleButtonClick = () => {
        props.clearConfig()
        props.navigation.goBack()
    }

    return (
        <Button onPress={handleButtonClick} >
            <Icon name="arrow-back" size={30} color={props.theme.PRIMARY_TEXT_COLOR} />
        </Button>
    )
}

export default withTheme(BackButton)