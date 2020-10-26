import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const ProfileImage = styled.Image`
  width: 100%;
  height: 40%;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 16px;
`;

export const Title = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: 18px;
  margin-top: 24px;
`;

export const Description = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: 18px;
`;

export const ActionContainer = styled.View`
  flex-direction: row;
  padding: 16px;
  justify-content: space-between;
`;
