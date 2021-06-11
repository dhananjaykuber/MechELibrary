import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RouteStack from './routes/RouteStack';

export default function App() {
  return (
    <NavigationContainer>
      <RouteStack />
    </NavigationContainer>
  );
}
