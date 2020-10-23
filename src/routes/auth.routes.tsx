import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';

const Routes: React.FC = () => {
  const { Screen, Navigator } = createStackNavigator();

  return (
    <Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
};

export default Routes;
