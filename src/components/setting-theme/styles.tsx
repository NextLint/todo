import styled from 'styled-components'
import { Animated } from 'react-native'

export const Container = styled.View`
    height: 300px;
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const PaletteButto = styled.TouchableOpacity`
    height: 70px;
    width: 70px;
    border-radius: 35px;
    align-items: center;
    justify-content: center;
    background-color: ${(props: any) => props.theme.SECONDARY_BACKGROUND_COLOR_LIGHT};
` 
export const PaletteButton = Animated.createAnimatedComponent(PaletteButto)

const Palette = styled.View`
    height: 70px;
    width: 70px;
    border-radius: 35px;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: ${(props: any) => props.theme.SECONDARY_BACKGROUND_COLOR};
`
export const AnimatedPalette = Animated.createAnimatedComponent(Palette)

const Theme = styled.View`
    height: 70px;
    width: 70px;
    border-radius: 35px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -35px;
    transform: translate(80px) rotate(${(props: any) => props.rot}deg);
`
export const AnimatedTheme = Animated.createAnimatedComponent(Theme)