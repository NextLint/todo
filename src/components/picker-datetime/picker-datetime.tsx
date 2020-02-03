import React from 'react'
import {
    Container,
    Title,
    PickerContainer,
    Date
} from './styles'
import DatePicker from 'react-native-datepicker'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { withTheme } from 'styled-components'

interface IDateTimePicker {
    title: string,

    date: string,
    updateDate(date: string): void
}

const DateTimePicker = (props: IDateTimePicker) => {

    const icon = <Icon name="alarm" size={40} color={props.theme.PRIMARY_TEXT_COLOR} />

    const changeDate = (date: any) => {
        props.updateDate(date)
    }

    return (
        <Container>
            <Title>{props.title}</Title>

            <PickerContainer>

                <DatePicker
                    style={{
                        height: 40,
                        width: 40,
                        margin: 10,
                    }}
                    date={props.date}
                    placeholder="Установить"
                    mode="datetime"
                    format="YYYY-MM-DD, hh:mm"
                    iconComponent={icon}
                    customStyles={{
                        placeholderText: {
                            color: 'white'
                        },
                        dateText: {
                            color: 'white'
                        },
                        dateInput: {
                            display: 'none'
                        }
                    }}
                    onDateChange={changeDate}
                />

                <Date>{props.date}</Date>

            </PickerContainer>

        </Container>
    )
}

export default withTheme(DateTimePicker)