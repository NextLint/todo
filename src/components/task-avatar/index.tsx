import React from 'react'
import { View, Image } from 'react-native'
import styles from './styles'
import { IImages } from '../../../redux/store/state-types'

interface ITaskAvatar {
    images: IImages[]
}

const TaskAvatar = (props: ITaskAvatar) => {

    const setSize = (number: number) => {
        if (number == 1) return {height: '100%', width: '100%'}
        else if (number == 2) return {height: '100%', width: 30}
        else if (number >= 3) return {height: 30, width: 30}
    }

    const renderImages = () => {
        return (props.images) ? props.images.map((img, index, images) => {
            const size = setSize(images.length)
            return (index <= 3) ? <Image key={index} source={{ uri: img.uri }} style={[styles.img, size]} /> : null
        }) : null
    }

    return (
        <View style={styles.container}>
            {renderImages()}
        </View>
    )
}

export default TaskAvatar