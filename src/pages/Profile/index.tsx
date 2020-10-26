import React, { useCallback } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import api from '../../services/api';

import Button from '../../components/Button';
import { Profile as ProfileData } from '../../components/ProfileCard';

import {
  Container,
  ProfileImage,
  Content,
  Title,
  Description,
  ActionContainer,
} from './styles';

interface RouteParamsData {
  profile: ProfileData;
}

const Profile: React.FC = () => {
  const { params } = useRoute();
  const { navigate, reset } = useNavigation();

  const { profile } = params as RouteParamsData;

  const handleDeleteProfile = useCallback(async () => {
    try {
      await api.delete(`/navers/${profile.id}`);

      Alert.alert('Naver excluído', 'Naver exclúido com sucesso!', [], {
        cancelable: true,
      });

      reset({
        index: 0,
        routes: [{ name: 'Dashboard' }],
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleDeleteProfileConfirmation = useCallback(() => {
    Alert.alert('Excluir naver', 'Tem certeza que deseja excluir este naver?', [
      {
        text: 'Cancelar',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Excluir',
        onPress: handleDeleteProfile,
      },
    ]);
  }, []);

  const handleUpdateProfile = useCallback(
    async (data: Omit<ProfileData, 'id'>) => {
      try {
        await api.put(`/navers/${profile.id}`, data);

        Alert.alert(
          `${profile.name} editado`,
          'Naver editado com sucesso!',
          [],
          {
            cancelable: true,
          },
        );

        reset({
          index: 0,
          routes: [{ name: 'Dashboard' }],
        });
      } catch (err) {
        console.log(err);
      }
    },
    [],
  );

  const handleUpdateProfileNavigation = useCallback(() => {
    navigate('ProfileForm', {
      title: 'Editar naver',
      defaultValues: profile,
      handleSubmitForm: handleUpdateProfile,
    });
  }, []);

  return (
    <Container>
      <ProfileImage source={{ uri: profile.url }} />

      <Content>
        <Title>{profile.name}</Title>
        <Description>{profile.job_role}</Description>

        <Title>Idade</Title>
        <Description>{profile.birthdate}</Description>

        <Title>Tempo de empresa</Title>
        <Description>{profile.admission_date}</Description>

        <Title>Projetos que participou</Title>
        <Description>{profile.project}</Description>
      </Content>

      <ActionContainer>
        <Button
          onPress={handleDeleteProfileConfirmation}
          icon="trash"
          style={{
            flex: 0.75,
            backgroundColor: '#fff',
            marginRight: 16,
          }}
          textStyle={{ marginLeft: 12, color: '#000' }}>
          Excluir
        </Button>

        <Button
          onPress={handleUpdateProfileNavigation}
          icon="pen"
          color="#fff"
          style={{ flex: 0.75, backgroundColor: '#000' }}
          textStyle={{ marginLeft: 12 }}
        >
          Editar
        </Button>
      </ActionContainer>
    </Container>
  );
};

export default Profile;
