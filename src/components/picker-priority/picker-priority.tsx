import React from 'react'
import { Picker } from 'react-native'
import {
    Container,
    Title
} from './styles'
import { Priority } from '../../../redux/store/state-types'

interface IPriorityPickerProps {
      title: string,
      value: Priority,

      setPriority(value: any): void,
}

const PriorityPicker = (props: IPriorityPickerProps) => {
      return (
            <Container>
                  <Title>{props.title}</Title>
                  <Picker
                        selectedValue={props.value}
                        onValueChange={props.setPriority}
                  >
                        <Picker.Item label="Нет" value="NO"/>
                        <Picker.Item label="Маленький" value="LOW" />
                        <Picker.Item label="Средний" value="MEDIUM" />
                        <Picker.Item label="Высокий" value="HIGH" />
                  </Picker>
            </Container>
      )
}

export default PriorityPicker