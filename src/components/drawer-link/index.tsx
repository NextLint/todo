import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
    Link,
    Title
} from './styles'
import { withTheme } from 'styled-components'

interface IDrawerLinkProps {
    title: string,
    navigation: any,
    path: string,
    nameIcon: string,
}

const DrawerLink = (props: IDrawerLinkProps) => {

    const handleLinkClick = () => {
        props.navigation.navigate(props.path)
    }

    return (
        <Link onPress={handleLinkClick} >
            <Icon name={props.nameIcon} size={30} color={props.theme.SECONDARY_TEXT_COLOR} style={{marginLeft: 10}} />
            <Title>{props.title}</Title>
        </Link>
    )
}

export default withTheme(DrawerLink)