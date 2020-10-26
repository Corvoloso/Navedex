import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 0.45;
`;

export const ProfileContainer = styled.TouchableOpacity``;

export const ProfileImage = styled.Image`
  width: 100%;
  height: 160px;
`;

export const Name = styled.Text.attrs((props) => ({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
}))`
  font-family: 'Montserrat-SemiBold';
  font-size: 18px;
`;

export const Role = styled.Text.attrs((props) => ({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
}))`
  font-family: 'Montserrat-Regular';
  font-size: 13px;
`;

export const ActionContainer = styled.View`
  flex-direction: row;
  margin-vertical: 12px;
`;

export const Button = styled.TouchableOpacity``;
