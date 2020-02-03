import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { Container, ListContainer } from './styles'
import { ITask } from '../../../redux/store/state-types'
import Task from '../task-default'
import ListStatistic from '../list-statistic'
import ListHeader from '../list-header'
import SearchContainer from '../header-search'
import { getPercentCompletion } from '../../../utils/todoHelp'

interface IListTasksProps {
    navigation: any,
    forToday?: boolean,
    tasks: ITask[],
    hasStatistic?: boolean,
    searchName: string,

    handleScroll(event: any): void,
    taskCompleted(id: string): void,
    deleteTask(id: string): void,
    loadTask(id: string): void,
}

const ListTasks = (props: IListTasksProps) => {

    let countTasks: number
    let countPriorityTasks: number
    let countCompletedTasks: number
    let percentCompletion: number
    const [isVisibleSearch, setVisibilitySearch] = useState(false)

    if (props.hasStatistic) {
        countTasks = props.tasks.length,
            countPriorityTasks = props.tasks.filter(task => task.priority != 'NO').length,
            countCompletedTasks = props.tasks.filter(task => task.completed == true).length,
            percentCompletion = getPercentCompletion(countCompletedTasks, countTasks)
    }

    const handleTaskDeleting = (id: string) => { props.deleteTask(id) }
    const handleSearchClick = () => { (isVisibleSearch) ? setVisibilitySearch(false) : setVisibilitySearch(true) }

    const renderItem = ({ item }: any) => (<Task
        id={item.id}
        title={item.title}
        date={item.deadline}
        priority={item.priority}
        completed={item.completed}
        navigation={props.navigation}
        deleteTask={handleTaskDeleting}
        taskCompleted={props.taskCompleted}
        loadTask={props.loadTask}
        images={item.img}
    />)

    const keyExtractor = (item: any) => item.id
    return (
        <Container>
            
            {(props.hasStatistic) && <ListStatistic 
                                            // @ts-ignore
                                            countTasks={countTasks}
                                            // @ts-ignore
                                            countPriorityTasks={countPriorityTasks}
                                            // @ts-ignore
                                            countCompletedTasks={countCompletedTasks}
                                            // @ts-ignore
                                            percentCompletion={percentCompletion}
                                        />}

            <ListHeader hasSearch={true} handleSearchClick={handleSearchClick}/>
            <SearchContainer isVisible={isVisibleSearch} unicName={props.searchName} />

            <ListContainer >
                <FlatList
                    data={props.tasks}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    scrollEventThrottle={16}
                    onScroll={props.handleScroll}
                />
            </ListContainer>
        </Container>
    )
}

export default React.memo(ListTasks)