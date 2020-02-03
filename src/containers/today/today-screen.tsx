import React, { PureComponent } from 'react'
import { View, LayoutAnimation, Platform, UIManager } from "react-native"
import HeaderScreen from '../../components/header-screen'
import TodayStatistic from '../../components/list-statistic'
import { Container } from './styles'
import ButtonContainer from '../../components/button-default'
import ListTasksContainer from '../../components/list-tasks'
import { ThemeProvider } from 'styled-components'

interface ITodayScreenProps {
    navigation: any,
}

if (Platform.OS == 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true)
    }
}

class TodayScreen extends PureComponent<ITodayScreenProps> {

    static navigationOptions = () => ({
        header: ({ navigation }) => <HeaderScreen title={'Сегодня'} navigation={navigation} />
    })
    private state: any
    private scrollOffset: any

    constructor(props: ITodayScreenProps) {
        super(props)

        this.state = {
            isVisible: true
        }
    }

    handleListScroll = (event: any) => {

        const CustomLayoutLinear = {
            duration: 300,
            create: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
            update: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
            delete: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity }
        }

        const currentOffset = event.nativeEvent.contentOffset.y
        if (this.scrollOffset > 0 && currentOffset > this.scrollOffset) {
            LayoutAnimation.configureNext(CustomLayoutLinear)
            this.setState({ isVisible: false })
        } else {
            LayoutAnimation.configureNext(CustomLayoutLinear)
            this.setState({ isVisible: true })
        }

        this.scrollOffset = currentOffset
    }

    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <Container>
                    <ListTasksContainer searchName={'searchToday'} hasStatistic={true} forToday={true} navigation={this.props.navigation} handleScroll={this.handleListScroll} />
                    {(this.state.isVisible) ? <ButtonContainer navigation={this.props.navigation} /> : null}
                </Container>
            </ThemeProvider>
        )
    }
}

export default TodayScreen