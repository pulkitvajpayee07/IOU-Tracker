
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Login from '../screens/Login';
import Register from '../screens/Register';
import DashBoard from '../screens/DashBoard';

const DashNavigator = createStackNavigator({
    Login: Login,
    Register: Register,
    DashBoard: DashBoard
});

export default createAppContainer(DashNavigator);

