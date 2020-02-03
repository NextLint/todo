import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native'
import { Header, Title, Functions } from './styles'
import FilterContainer from '../list-filter'
import { withTheme } from 'styled-components'

interface IListHeaderProps {
    handleSearchClick(): void,
    hasSearch?: boolean,
    theme: any
}

const ListHeader = (props: IListHeaderProps) => {
    return (
        <Header>
            <Title>Список</Title>
            <Functions>
                
                {props.hasSearch && <TouchableOpacity onPress={props.handleSearchClick}>
                    <Icon name="search" size={30} color={props.theme.SECONDARY_TEXT_COLOR} />
                </TouchableOpacity>}

                <FilterContainer />

            </Functions>
        </Header>
    )
}

export default withTheme(ListHeader)