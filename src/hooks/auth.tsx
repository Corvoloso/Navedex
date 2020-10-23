import React, { useContext, createContext, useState, useCallback } from 'react';
import api from '../services/api';

interface User {
  id: string;
  email: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthState {
  user: User;
  token: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
}

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = useState({} as AuthState);

  const signIn = useCallback(async (data) => {
    const response = await api.post('/users/login', data);

    const { token, email, id } = response.data;

    api.defaults.headers.authorization = `Bearer ${token}`;

    setUserData({
      user: {
        id,
        email,
      },
      token,
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user: userData.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('AuthProvider not applied');
  }

  return context;
};
