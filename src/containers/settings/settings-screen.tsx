import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Container } from './styles'
import ScreenHeaderContainer from '../../components/header-screen'
import { CheckBox } from 'react-native'
import SettingThemeContainer from '../../components/setting-theme'

interface ISettingsScreenProps {
    theme: any
}

const SettingsScreen = (props: ISettingsScreenProps) => {
    return (
        <ThemeProvider theme={props.theme}>
            <Container>
                <ScreenHeaderContainer title={'Настройки'} navigation={props.navigation} />
                <SettingThemeContainer />
            </Container>
        </ThemeProvider>
    )
}

export default SettingsScreen