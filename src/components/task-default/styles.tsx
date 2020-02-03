import styled from 'styled-components'
import { Animated } from 'react-native'


const TaskContainer = styled.View`
    height: 70px;
    width: 100%;
    background-color: #ff0000;
    flex-direction: row;
    margin-bottom: 10px;
`
export const AnimatedTaskContainer = Animated.createAnimatedComponent(TaskContainer)

const Task = styled.View`
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
`
export const AnimatedTask = Animated.createAnimatedComponent(Task)

export const ContentContainer = styled.View`
    position: absolute;
    height: 100%;
    width: 100%;
    flex-direction: row;
    align-items: center;
    background-color: ${(props: any) => props.theme.SECONDARY_BACKGROUND_COLOR_LIGHT};
`

export const Toggle = styled.TouchableOpacity`
    height: 30px;
    width: 30px;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 5px;
    border-width: 2px;
    border-color: ${(props: any) => props.theme.PRIMARY_TEXT_COLOR};
`

export const LinkCover = styled.TouchableWithoutFeedback`
    height: 100%;
    width: 100%;
    background-color: ${(props: any) => props.theme.SECONDARY_BACKGROUND_COLOR_LIGHT};
`

export const Content = styled.View`
    height: 100%;
    width: 80%;
    flex-direction: row;
    align-items: center;
`

export const Label = styled.View`
    height: 100%;
    width: 100%;
    justify-content: center;
    position: relative;   
`

export const Title = styled.Text`
    font-size: 22px;
    color: ${(props: any) => props.theme.PRIMARY_TEXT_COLOR};
`

export const Description = styled.Text`
    color: ${(props: any) => props.theme.SECONDARY_TEXT_COLOR}
`

export const PriorityWidget = styled.View`
    height: 100%;
    width: 20px;
    position: absolute;
    top: 0px;
    right: 0px;
`