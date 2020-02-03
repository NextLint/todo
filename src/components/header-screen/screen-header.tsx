import React from 'react';
import {
    Container,
    Content,
    Button,
    Title
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons'
import BackButtonContainer from '../button-back';
import { ThemeProvider } from 'styled-components'

interface IHeaderScreenProps {
    title?: string,
    navigation?: any,
    hasBackButton?: boolean,
}

const ScreenHeader = (props: IHeaderScreenProps) => {

    const handleMenuClick = () => {
        props.navigation.openDrawer()
    }

    return (
        <ThemeProvider theme={props.theme}>
            <Container>
                <Content>

                    {(props.hasBackButton) ? <BackButtonContainer navigation={props.navigation} />
                        :
                        <Button onPress={handleMenuClick} >
                            <Icon name="menu" size={30} color={props.theme.PRIMARY_TEXT_COLOR} />
                        </Button>}

                    <Title>{props.title}</Title>
                </Content>
            </Container>
        </ThemeProvider>
    );
}

export default ScreenHeader