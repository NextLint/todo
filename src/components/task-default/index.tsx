import React, { PureComponent } from 'react';
import {
    AnimatedTaskContainer,
    AnimatedTask,
    ContentContainer,
    Toggle,
    LinkCover,
    Content,
    Label,
    Title,
    Description,
    PriorityWidget
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
    PanResponder,
    Animated,
    Easing,
    Dimensions,
} from 'react-native';
import { Priority, IImages } from '../../../redux/store/state-types';
import TaskAvatar from '../task-avatar';
import { withTheme } from 'styled-components'

interface ITaskProps {
    id: string,
    title: string,
    date?: string,
    priority?: Priority,
    completed: boolean,
    navigation: any,
    taskCompleted(id: string): void,
    deleteTask(id: string): void,
    loadTask(id: string): void,
    images: IImages[]
}

const WIDTH = Dimensions.get('window').width

class Task extends PureComponent<ITaskProps> {

    private gestureDelay: any
    private panResponder: any
    private positionTask: any
    private heightContainer: any

    constructor(props: ITaskProps) {
        super(props)
        this.gestureDelay = -35
        this.positionTask = new Animated.ValueXY()
        this.heightContainer = new Animated.Value(0)

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => false,
            onMoveShouldSetPanResponder: (evt, gestureState) => { return (gestureState.dx > 35) },
            onPanResponderTerminationRequest: (evt, gestureState) => false,
            onPanResponderMove: (evt, gestureState) => {
                if (gestureState.dx > 35) {
                    let newX = gestureState.dx + this.gestureDelay
                    this.positionTask.setValue({ x: newX, y: 0 })
                }
            },
            onPanResponderRelease: (evt, gestureState) => {
                if (gestureState.dx < 150) {
                    Animated.timing(this.positionTask, {
                        toValue: { x: 0, y: 0 },
                        duration: 150,
                        easing: Easing.linear
                    }).start()
                } else if (gestureState.dx >= 150) {
                    this.animateTaskDeleting()
                }
            }
        })
    }

    animateTaskDeleting = () => {
        Animated.sequence([
            Animated.timing(this.positionTask, {
                toValue: { x: WIDTH, y: 0 },
                duration: 300,
            }),
            Animated.timing(this.heightContainer, {
                toValue: 1,
                duration: 200
            })
        ]).start(() => {
            this.handleTaskDeleting()
        })
    }

    handleToggleClick = () => { this.props.taskCompleted(this.props.id) }
    handleTaskDeleting = () => { this.props.deleteTask(this.props.id) }
    handleTaskClick = () => {
        this.props.loadTask(this.props.id)
        this.props.navigation.navigate('task', { id: this.props.id })
    }

    render() {
        const taskPriorityColor = {
            backgroundColor: (this.props.priority == 'LOW') ? this.props.theme.PRIORITY_LOW
                : (this.props.priority == 'MEDIUM') ? this.props.theme.PRIORITY_MEDIUM
                    : (this.props.priority == 'HIGH') ? this.props.theme.PRIORITY_HIGH
                        : this.props.theme.SECONDARY_BACKGROUND_COLOR_LIGHT
        }
        const taskTitle = {
            textDecorationLine: (this.props.completed) ? 'line-through' : 'none'
        }
        const containerHeight = {
            height: this.heightContainer.interpolate({
                inputRange: [0, 1],
                outputRange: [70, 0]
            })
        }

        return (
            <AnimatedTaskContainer style={{ height: containerHeight.height }}>

                <Icon name="delete" size={30} color="white" style={{ margin: 20 }} />

                <AnimatedTask
                    style={this.positionTask.getLayout()}
                    {...this.panResponder.panHandlers}
                >
                    <ContentContainer>
                        <Toggle onPress={this.handleToggleClick} >
                            {(this.props.completed) ? <Icon name="check" size={25} color={this.props.theme.PRIMARY_TEXT_COLOR} /> : null}
                        </Toggle>
                        <LinkCover onPress={this.handleTaskClick}>
                            <Content>

                                <Label>
                                    <Title style={{ textDecorationLine: taskTitle.textDecorationLine }}>
                                        {this.props.title}
                                    </Title>
                                    <Description>{(this.props.date) ? `До ${this.props.date.toString()}` : null}</Description>
                                </Label>

                                <TaskAvatar images={this.props.images} />

                            </Content>
                        </LinkCover>

                        <PriorityWidget style={{ backgroundColor: taskPriorityColor.backgroundColor }} />
                    
                    </ContentContainer>
                </AnimatedTask>

            </AnimatedTaskContainer>
        )
    }
}

export default withTheme(Task)