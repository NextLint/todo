import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity, Animated } from 'react-native'
import FilterItem from '../filter-item'
import { IFilter } from '../../../redux/store/state-types'
import { AnimatedList } from './styles'
import { withTheme } from 'styled-components'

interface IFilterProps {
    filter: IFilter,
    setFilter(value: IFilter): void,
    theme: any
}

const Filter = (props: IFilterProps) => {
    
    const animateValue = new Animated.Value(0)
    const [isVisibleList, setVisibility] = useState(false)
    
    useEffect(() => {
        if (isVisibleList) {
            Animated.timing(animateValue, {
                toValue: 1,
                duration: 500,
            }).start()
        } else {
            Animated.timing(animateValue, {
                toValue: 0,
                duration: 500,
            }).start()
        }
    }, [isVisibleList])

    const handleMoreClick = () => { (isVisibleList) ? setVisibility(false) : setVisibility(true) }
    const handleItemClick = (value: IFilter) => { props.setFilter(value) }

    const listAnimateStyle = {
        opacity: animateValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        }) || 0,
        left: (isVisibleList) ? animateValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-90, -100]
        }) : 100
    }

    return (
        <>
            <TouchableOpacity onPress={handleMoreClick}>
                <Icon name="more-vert" size={30} color={props.theme.SECONDARY_TEXT_COLOR} />
            </TouchableOpacity>

            <AnimatedList style={{opacity: listAnimateStyle.opacity, left: listAnimateStyle.left}}>
                <FilterItem label={'Показать все'} value={'ALL'} handleItemClick={handleItemClick}/>
                <FilterItem label={'Показать завершённые'} value={'COMPLETED'} handleItemClick={handleItemClick}/>
                <FilterItem label={'Показать активные'} value={'ACTIVE'} handleItemClick={handleItemClick}/>
            </AnimatedList>
        </>
    )
}

export default React.memo(withTheme(Filter))