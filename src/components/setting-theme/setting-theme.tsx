import React, { useState, useEffect } from 'react'
import { PaletteButton, Container, AnimatedPalette, AnimatedTheme } from './styles'
import { withTheme } from 'styled-components'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Animated } from 'react-native'
import Theme from '../palette-item'

interface ISettingThemeProps {
    palette: any,
    updateTheme(id: string): void
}

const SettingTheme = (props: ISettingThemeProps) => {

    const [isShownPalette, showPalette] = useState(false)
    const opacityValue = new Animated.Value((isShownPalette) ? 0 : 1)
    const bounceValue = new Animated.Value((isShownPalette) ? 0 : 1)

    useEffect(() => {
        if (isShownPalette) {
            Animated.sequence([
                Animated.spring(bounceValue, {
                    toValue: (isShownPalette) ? 1 : 0,
                    friction: 6
                }),
                Animated.timing(opacityValue, {
                    toValue: (isShownPalette) ? 1 : 0,
                    duration: 200
                })
            ]).start()
        } else {
            Animated.sequence([
                Animated.timing(opacityValue, {
                    toValue: 0,
                    duration: 300
                }),
                Animated.timing(bounceValue, {
                    toValue: 0,
                    duration: 100
                })
            ]).start()
        }
    }, [isShownPalette])

    const handleButtonClick = () => { (isShownPalette) ? showPalette(false) : showPalette(true) }

    const paletteStyle = {
        height: bounceValue.interpolate({
            inputRange: [0, 1],
            outputRange: [70, 250]
        }),
        width: bounceValue.interpolate({
            inputRange: [0, 1],
            outputRange: [70, 250]
        }),
        borderRadius: bounceValue.interpolate({
            inputRange: [0, 1],
            outputRange: [35, 125]
        })
    }

    const paletteButtonStyle = {
        height: bounceValue.interpolate({
            inputRange: [0, 1],
            outputRange: [70, 50]
        }),
        width: bounceValue.interpolate({
            inputRange: [0, 1],
            outputRange: [70, 50]
        }),
    }

    const themeStyle = {
        opacity: opacityValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        })
    }

    const renderThemes = (themes: any) => {

        const angle = 360 / themes.length
        let rot = 30

        return themes.map((theme: any, index: any) => {
            const component = (<AnimatedTheme key={index} rot={rot} style={themeStyle}>
                                    <Theme id={theme.id} col={theme.PRIMARY_BACKGROUND_COLOR} chooseTheme={props.updateTheme} />
                                </AnimatedTheme>)
            rot += angle
            return component
        })
    }

    return (
        <Container>
            <AnimatedPalette style={paletteStyle} >
                <PaletteButton onPress={handleButtonClick} style={paletteButtonStyle}>
                    <Icon name="pets" size={30} color="white" />
                </PaletteButton>
                {renderThemes(props.palette)}
            </AnimatedPalette>
        </Container>
    )
}

export default withTheme(SettingTheme)