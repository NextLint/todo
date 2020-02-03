import React from 'react'
import { ScrollView } from 'react-native'
import {
    Container,
    ConfigurationContainer
} from './styles'
import SectionTitle from '../../components/section-title'
import ButtonContainer from '../../components/button-default'
import HeaderScreen from '../../components/header-screen'
import TaskInputContainer from '../../components/task-input'
import PriorityPickerContainer from '../../components/picker-priority'
import ImagePickerContainer from '../../components/picker-image'
import DateTimePickerContainer from '../../components/picker-datetime'
import { ThemeProvider } from 'styled-components'

interface ITaskScreenProps {
    navigation: any,
}

const TaskScreen = (props: ITaskScreenProps) => {
    return (
        <ThemeProvider theme={props.theme}>
            <Container>
                <SectionTitle title={'Редактирование задачи'} />

                <ConfigurationContainer>

                    <ScrollView contentContainerStyle={{alignItems: 'center'}}>
                        <TaskInputContainer isRequired={true} title={'Что вы хотите сделать?'} unicName={'main'} />
                        <TaskInputContainer isRequired={false} title={'Опишите свою цель'} unicName={'description'} />
                        <DateTimePickerContainer title={'Срок'} />
                        <PriorityPickerContainer title={'Приоритет'} />
                        <ImagePickerContainer title={'Прикрепить фото'} />
                    </ScrollView>

                </ConfigurationContainer>

                <ButtonContainer isDone={true} navigation={props.navigation} />
            </Container>
        </ThemeProvider>
    )
}

TaskScreen.navigationOptions = (props: ITaskScreenProps) => ({
    header: () => <HeaderScreen navigation={props.navigation} hasBackButton={true} />
})

export default TaskScreen