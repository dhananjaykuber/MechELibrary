// import statements
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'; // used to create the stack of screens
import HomeScreen from '../screens/HomeScreen';
import ElementsScreen from '../screens/ElementsScreen';
import SubElementsScreen from '../screens/SubElementsScreen';
import VisionMissionScreen from '../screens/VisionMissionScreen';

const Stack = createStackNavigator(); // to create the stack

const RouteStack = () => {
  return (
    <Stack.Navigator headerMode={'none'} initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ElementsScreen" component={ElementsScreen} />
      <Stack.Screen name="SubElementsScreen" component={SubElementsScreen} />
      <Stack.Screen
        name="VisionMissionScreen"
        component={VisionMissionScreen}
      />
    </Stack.Navigator>
  );
};

export default RouteStack;
