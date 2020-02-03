import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Btn } from './styles';
import { withTheme } from 'styled-components'

interface IButtonProps {
    isDone?: boolean,
    navigation?: any,

    addTask(): void,
    changeTask(id: string): void
}

const Button = (props: IButtonProps) => {

    const id = props.navigation.getParam('id')

    const handleButtonClick = () => {
        if (props.isDone && id) {
            props.changeTask(id)
            props.navigation.goBack()
        } else if (props.isDone && !id) {
            props.addTask()
            props.navigation.goBack()
        } else {
            props.navigation.navigate('task')
        }
    }

    return (
        <Btn onPress={handleButtonClick} >
            {(props.isDone) ? <Icon name="check" size={30} color="black" />
                : <Icon name="add" size={30} color="black" />}
        </Btn>
    );
}

export default withTheme(Button);