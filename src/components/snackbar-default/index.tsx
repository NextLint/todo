import React, { forwardRef, useImperativeHandle, useState, useEffect, useRef } from 'react'
import { View, Animated, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const Snackbar = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        show(duration: number) {
            showSnack(duration)
        }
    }))

    // хак, юзаем реф на значении анимации и сразу же возвращаем текущее, чтобы оставить его живым на весь цикл
    const animateValue = useRef(new Animated.Value(0)).current
    console.warn('render')

    const showSnack = (duration = 3) => {
        Animated.timing(animateValue, {
            toValue: 1,
            duration: 500,
        }).start(
            () => { setTimeout(() => { hideSnack() }, duration * 1000) }
        )
    }

    const hideSnack = () => {
        Animated.timing(animateValue, {
            toValue: 0,
            duration: 500,
        }).start(
            () => {  }
        )
    }

    let heightContainer = {
        height: animateValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 50]
        })
    }

    const handleUndo = () => {
        hideSnack()
    }

    return (
        <Animated.View style={[styles.container, heightContainer]}>
            <Text style={styles.message}>Задача была удалена</Text>
            <TouchableOpacity style={styles.btn} onPress={handleUndo} >
                <Text style={styles.btn__text} >UNDO</Text>
            </TouchableOpacity>
        </Animated.View>
    )
})

export default Snackbar