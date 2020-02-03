import styled from 'styled-components'
import { Animated } from 'react-native'

const Container = styled.View`
    height: 60px;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${(props: any) => props.theme.SECONDARY_BACKGROUND_COLOR};
`
export const AnimatedContainer = Animated.createAnimatedComponent(Container)

export const Input = styled.TextInput`
    width: 90%;
    border-radius: 20px;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: ${(props: any) => props.theme.SECONDARY_BACKGROUND_COLOR_LIGHT};
    border-width: 2px;
    border-color: ${(props: any) => props.theme.PRIMARY_TEXT_COLOR};
    font-size: 18px;
    color: ${(props: any) => props.theme.SECONDARY_TEXT_COLOR};
`