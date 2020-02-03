import styled from 'styled-components'
import { Animated } from 'react-native'

const List = styled.View`
    width: 150px;
    background-color: ${(props: any) => props.theme.SECONDARY_BACKGROUND_COLOR};
    position: absolute;
    top: 50px;
    left: 80px;
    zIndex: 200;
    opacity: 0
`
export const AnimatedList = Animated.createAnimatedComponent(List)