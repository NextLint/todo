import React from 'react'
import { ScrollView } from 'react-native'
import { Header, Drawer } from './styles'
import DrawerLink from '../drawer-link'
import { ThemeProvider } from 'styled-components'

interface IDrawerMenuProps {
    navigation: any,
}

const DrawerMenu = (props: IDrawerMenuProps) => {
    return (
            <ThemeProvider theme={props.theme} >
                <Drawer>
                    <Header />

                    <ScrollView style={{ height: '100%', width: '100%', padding: 20 }} >

                        <DrawerLink title={"Все задачи"} navigation={props.navigation} nameIcon={"list"} path={'all'} />
                        <DrawerLink title={"Задачи на сегодня"} navigation={props.navigation} nameIcon={"today"} path={'today'} />
                        <DrawerLink title={"Настройки"} navigation={props.navigation} nameIcon={"settings"} path={'settings'} />

                    </ScrollView>

                </Drawer>
            </ThemeProvider>
    )
}

export default DrawerMenu