import React from 'react';
import { useAuth } from '../hooks/auth';

import AuthStack from './auth.routes';
import AppStack from './app.routes';

const Routes: React.FC = () => {
  const { user } = useAuth();

  return user ? <AppStack /> : <AuthStack />;
};

export default Routes;
