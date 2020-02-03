import React, { useEffect } from 'react';
import { Animated } from 'react-native';
import { AnimatedContainer, Input } from './styles';
import { withTheme } from 'styled-components'

interface ISearchProps {
    isVisible?: boolean,
    unicName: string,
    currentText: string,
    updateText(text: string, name: string): void,
    theme: any
}

const Search = (props: ISearchProps) => {

    const heightValue = new Animated.Value(0)
    const opacityValue = new Animated.Value(0)

    useEffect(() => {
        if (props.isVisible == false) {
            Animated.timing(heightValue, {
                toValue: 0,
                duration: 800
            }).start()
        } else {
            Animated.parallel([
                Animated.timing(heightValue, {
                    toValue: 1,
                    duration: 300
                }),
                Animated.timing(opacityValue, {
                    toValue: 1,
                    duration: 500,
                })
            ]).start()
        }
    }, [props.isVisible])

    const handleChangeInput = (text: string) => {
        props.updateText(text, props.unicName)
    }

    const animateStyleContainer = {
        height: heightValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 50]
        }),
        opacity: opacityValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        }),
    }

    return (
        <AnimatedContainer style={animateStyleContainer}>
            <Input
                placeholder='Search...'
                value={props.currentText}
                onChangeText={handleChangeInput} />
        </AnimatedContainer>
    );
}

export default withTheme(Search);