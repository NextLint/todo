import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import { Dimensions } from 'react-native';
import all_StackNavigator from '../all/all-stackNavigator';
import today_StackNavigator from '../today/today-stackNavigator';
import DrawerContainer from '../../components/drawer-menu';
import SettingsScreenContainer from '../settings';

const WIDTH = Dimensions.get('window').width;

const routes = {
    all: all_StackNavigator,
    today: today_StackNavigator,
    settings: SettingsScreenContainer
}

const navigationConfig = {
    initialRouteName: 'all',
    drawerWidth: WIDTH * 0.83,
    contentComponent: DrawerContainer,
}

const DrawerNavigator = createDrawerNavigator(routes, navigationConfig)

const AppContainer = createAppContainer(DrawerNavigator)

export default AppContainer