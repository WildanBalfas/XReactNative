/** @format */

import {AppRegistry, Dimensions} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
// import App from './src/components/App';
import {name as appName} from './app.json';

import HomeComponent from './src/components/HomeComponent';
import InfoComponent from './src/components/InfoComponent';
import SettingsComponent from './src/components/SettingsComponent';
import CloudComponent from './src/components/CloudComponent';
import TablesComponent from './src/components/TablesComponent';

import { Home, Info, Settings, Cloud, Table } from './screenNames';
import { Tab } from 'native-base';

var {heigth, width } = Dimensions.get('window');

let routeConfigs = {
    Home: {
        path: '/',
        screen: HomeComponent,
    },
    Info: {
        path: '/info',
        screen: InfoComponent,
    },
    Settings: {
        screen: SettingsComponent,
    },
    Cloud: {
        screen: CloudComponent,
    },
    Table: {
        screen: TablesComponent,
    }    
}

let DrawerNavigatorConfig = {
    initialRouteName: Home,
    drawerWidth: width/2,
    // drawerPosition: 'right',
    drawerOpenRoutue: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    // drawerBackgroundColor: 'orange',
    contentOptions: {
        activeTintColor: 'orange',
    },
}

const App = DrawerNavigator(routeConfigs, DrawerNavigatorConfig);
AppRegistry.registerComponent(appName, () => App);
