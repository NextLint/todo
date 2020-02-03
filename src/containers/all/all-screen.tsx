import React, { PureComponent } from 'react'
import { Platform, UIManager, LayoutAnimation } from 'react-native'
import { ThemeProvider } from 'styled-components'
import { Container } from './styles'
import ListTasksContainer from '../../components/list-tasks'
import ButtonContainer from '../../components/button-default'
import ScreenHeaderContainer from '../../components/header-screen'

interface IAllScreenProps {
    navigation: any,
    theme: any,
}

if (Platform.OS == 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true)
    }
}

class AllScreen extends PureComponent<IAllScreenProps> {

    static navigationOptions = () => ({
        header: ({ navigation }: any) => <ScreenHeaderContainer title={'Все задачи'} navigation={navigation} />
    })
    public state: any
    private scrollOffset: any

    constructor(props: IAllScreenProps) {
        super(props)

        this.state = {
            isVisibleButton: true
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
            this.setState({ isVisibleButton: false })
        } else {
            LayoutAnimation.configureNext(CustomLayoutLinear)
            this.setState({ isVisibleButton: true })
        }

        this.scrollOffset = currentOffset
    }

    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <Container>
                    <ListTasksContainer
                        searchName={'searchAll'}
                        navigation={this.props.navigation}
                        handleScroll={this.handleListScroll}
                    />

                    {this.state.isVisibleButton && <ButtonContainer navigation={this.props.navigation} />}
                </Container>
            </ThemeProvider>
        )
    }
}

export default AllScreen