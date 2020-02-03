import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Button, Label } from './styles'
import { IFilter } from '../../../redux/store/state-types'

interface IFilterItemProps {
    label: string,
    value: IFilter,
    handleItemClick(value: IFilter): void
}

const FilterItem = (props: IFilterItemProps) => {

    const handleItemClick = () => { props.handleItemClick(props.value) }

    return (
        <Button onPress={handleItemClick}>
            <Label>{props.label}</Label>
        </Button>
    )
}

export default FilterItem 