import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Text } from 'react-native';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import ProfileForm from '../pages/ProfileForm';

const Header: React.FC = () => <Text>NAVE.RS</Text>;

const Routes: React.FC = () => {
  const { Screen, Navigator } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: () => <Header />,
      }}>
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="Profile" component={Profile} />
      <Screen name="ProfileForm" component={ProfileForm} />
    </Navigator>
  );
};

export default Routes;
