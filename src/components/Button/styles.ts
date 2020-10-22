import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background-color: #212121;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  padding: 8px;
  color: #fff;
  font-family: 'Montserrat-SemiBold';
  font-size: 20px;
`;
