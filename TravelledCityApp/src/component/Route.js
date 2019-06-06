
import React from 'react';
import {createAppContainer,createStackNavigator,createMaterialTopTabNavigator} from 'react-navigation'
import addCity from './addCity'
import Cities from './Cities'
import City from './City'
import { colors } from './theme';


const Route = createMaterialTopTabNavigator({
    AddCity:{screen:addCity},
    Cities:{screen:Cities},
})


export default createAppContainer(Route)