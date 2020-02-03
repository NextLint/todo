import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Animated, Easing } from 'react-native'
import {
    Container,
    InputContainer,
    Input
} from './styles'
import { withTheme } from 'styled-components'

interface ITaskInputProps {
    title: string,
    isRequired?: boolean,
    unicName: string,

    currentText: string,
    updateText(text: string, name: string): void,
}

const TaskInput = React.memo(function (props: ITaskInputProps) {

    const [isFocused, setFocus] = useState(false)

    const handleChangeInput = (text: any) => { props.updateText(text, props.unicName) }

    const animatedValue = new Animated.Value((props.currentText !== '') ? 1 : 0)

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: (isFocused || props.currentText !== '') ? 1 : 0,
            duration: 200,
            easing: Easing.linear
        }).start()
    })

    const titleStyle = {
        position: 'absolute',
        left: 0,
        top: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [30, 0]
        }),
        fontSize: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [17, 18]
        }),
        fontWeight: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['100', '900']
        }),
        color: props.theme.SECONDARY_TEXT_COLOR
    }

    const backContainer = {
        backgroundColor: (props.isRequired) ? props.theme.PRIORITY_HIGH : props.theme.SECONDARY_BACKGROUND_COLOR
    }

    return (
        <Container style={backContainer}>
            <InputContainer>
                <Animated.Text style={titleStyle} >{props.title}</Animated.Text>

                <Input
                    value={props.currentText}
                    multiline={true}
                    scrollEnabled={false}
                    onChangeText={handleChangeInput}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />

            </InputContainer>
        </Container>
    )
})

export default withTheme(TaskInput)