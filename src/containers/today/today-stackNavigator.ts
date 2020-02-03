import { createStackNavigator } from 'react-navigation-stack';
import TaskScreenContainer from '../task';
import TodayScreenContainer from '.';

const routes = {
    today: TodayScreenContainer,
    task: TaskScreenContainer
}

const config = {
    initialRouteName: 'today'
}

const today_StackNavigator = createStackNavigator(routes, config)

export default today_StackNavigator