import { createStackNavigator } from 'react-navigation-stack'
import AllScreenContainer from '../all'
import TaskScreenContainer from '../task'

const routes = {
    all: AllScreenContainer,
    task: TaskScreenContainer
}

const config = {
    initialRouteName: 'all',
}

const all_StackNavigator = createStackNavigator(routes, config)

export default all_StackNavigator