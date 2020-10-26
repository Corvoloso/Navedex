import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Alert } from 'react-native';
import { format } from 'date-fns';
import api from '../../services/api';

import {
  Container,
  ProfileImage,
  Name,
  Role,
  ActionContainer,
  Button,
  ProfileContainer,
} from './styles';

export interface Profile {
  id: string;
  name: string;
  job_role: string;
  url: string;
  admission_date?: string | number | Date;
  birthdate?: string | number | Date;
  project?: string;
}

export interface ProfileCardProps {
  profile: Profile;
  index: number;
  handleDeleteProfile(profile: Profile): Promise<void>;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  profile,
  index,
  handleDeleteProfile,
}) => {
  const { navigate, reset } = useNavigation();

  const handleNavigateProfile = useCallback(() => {
    navigate('Profile', { profile });
  }, []);

  const handleDeleteProfileConfirmation = useCallback(() => {
    Alert.alert(
      'Excluir naver',
      'Tem certeza que deseja excluir este naver?',
      [
        {
          text: 'Cancelar',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: () => handleDeleteProfile(profile, index),
        },
      ],
      { cancelable: true },
    );
  }, []);

  const handleUpdateProfile = useCallback(async (data: Omit<Profile, 'id'>) => {
    try {
      await api.put(`/navers/${profile.id}`, data);

      Alert.alert('Naver editado', 'Naver editado com sucesso!', [], {
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

  const handleUpdateProfileNavigation = useCallback(() => {
    navigate('ProfileForm', {
      title: 'Editar naver',
      defaultValues: profile,
      handleSubmitForm: handleUpdateProfile,
    });
  }, []);

  return (
    <Container>
      <ProfileContainer onPress={handleNavigateProfile}>
        <ProfileImage source={{ uri: profile.url }} />

        <Name>{profile.name}</Name>
        <Role>{profile.job_role}</Role>
      </ProfileContainer>

      <ActionContainer>
        <Button onPress={handleDeleteProfileConfirmation}>
          <Icon name="trash" size={24} />
        </Button>

        <Button
          style={{ marginLeft: 12 }}
          onPress={handleUpdateProfileNavigation}
        >
          <Icon name="pen" size={24} />
        </Button>
      </ActionContainer>
    </Container>
  );
};

export default ProfileCard;
