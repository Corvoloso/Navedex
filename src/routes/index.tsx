import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  const { Screen, Navigator } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="SignIn"
        screenOptions={{ headerShown: false }}>
        <Screen name="SignIn" component={SignIn} />
        <Screen name="Dashboard" component={Dashboard} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
