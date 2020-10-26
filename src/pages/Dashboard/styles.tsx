import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin: 0 16px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  margin-top: 28px;
`;

export const Title = styled.Text`
  flex: 1;
  font-family: 'Montserrat-SemiBold';
  font-size: 22px;
  align-self: center;
`;

export const ProfilesList = styled.FlatList`
  margin-top: 20px;
`;

export const EmptyListText = styled.Text`
  align-self: center;
`;
