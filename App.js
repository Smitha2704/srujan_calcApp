import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import CalculatorScreen from './screens/CalculatorScreen';
import PeriodicTableScreen from './screens/PeriodicTable';

import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation'

export default class App extends React.Component {
  render(){
   return(
     <AppContainer/>
   )  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TabNavigator= createBottomTabNavigator({
  CalculatorScreen: {screen:CalculatorScreen},
  PeriodicTableScreen:{screen:PeriodicTableScreen}
})

const AppContainer=createAppContainer(TabNavigator)