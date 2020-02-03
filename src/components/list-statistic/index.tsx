import React, { useContext } from 'react'
import { Container, Content, Label, StatusText, Status, StatusLine, Runner, LabelStatus } from './styles'
import SectionTitle from '../section-title'
import { getDayWeek, getDate } from '../../../utils/dateParser'
import { withTheme } from 'styled-components'

interface IListStatisticProps {
    countTasks: number,
    countPriorityTasks: number,
    countCompletedTasks: number,
    percentCompletion: number,
}

const ListStatistic = (props: IListStatisticProps) => {
    
    const runnerLength = { 
        width: (props.percentCompletion) ? `${props.percentCompletion}%` : `0%`
    }
    
    return (
            <Container>
            <SectionTitle title={getDayWeek()} hasDate={true} getDate={getDate} />

            <Content>
                <Label>Количество задач: {props.countTasks}</Label>
                <Label>Количество приоритетных задач: {props.countPriorityTasks}</Label>
                <Label>Количество завершённых задач задач: {props.countCompletedTasks}</Label>
                <LabelStatus>Процент выполненных задач</LabelStatus>
                <Status>
                    <StatusLine>
                        <Runner style={runnerLength} />
                    </StatusLine>
                </Status>
            </Content>
        </Container>
    )
}

export default React.memo(withTheme(ListStatistic))