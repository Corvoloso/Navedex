import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  const { Screen, Navigator } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="Dashboard"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Dashboard" component={Dashboard} />
    </Navigator>
  );
};

export default Routes;
