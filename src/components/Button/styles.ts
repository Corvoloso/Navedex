import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  padding: 8px;
  background-color: #212121;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  color: #fff;
  padding: 8px;
  font-family: 'Montserrat-SemiBold';
  font-size: 16px;
`;
