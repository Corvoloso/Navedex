import React, { useCallback, useState, useEffect } from 'react';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { Alert, Text } from 'react-native';
import { format } from 'date-fns';
import api from '../../services/api';

import Button from '../../components/Button';
import ProfileCard from '../../components/ProfileCard';
import { Profile } from '../../components/ProfileCard';

import {
  Container,
  TitleContainer,
  Title,
  ProfilesList,
  EmptyListText,
} from './styles';

const Dashboard: React.FC = () => {
  const { navigate, reset } = useNavigation();
  const isFocused = useIsFocused();

  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [reload, setReload] = useState(false);

  const handleCreateNewUser = useCallback(async (data) => {
    try {
      await api.post('/navers', data);

      Alert.alert('Naver adicionado', 'Naver adicionado com sucesso!', [], {
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

  const handleCreateNewUserNavigation = useCallback(() => {
    navigate('ProfileForm', {
      title: 'Adicionar naver',
      handleSubmitForm: handleCreateNewUser,
    });
  }, []);

  const handleDeleteProfile = useCallback(async (profile: Profile) => {
    try {
      await api.delete(`/navers/${profile.id}`);

      Alert.alert('Naver excluído', 'Naver exclúido com sucesso!', [], {
        cancelable: true,
      });

      setReload(!reload);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    async function loadProfiles(): Promise<void> {
      const response = await api.get('/navers');

      const newProfiles = response.data.map((profile: Profile) => ({
        ...profile,
        admission_date: format(
          new Date(profile.admission_date),
          `dd'/'MM'/'yyyy`,
        ),
        birthdate: format(new Date(profile.birthdate), `dd'/'MM'/'yyyy`),
      }));

      setProfiles(newProfiles);
    }

    loadProfiles();
  }, [isFocused, reload]);

  return (
    <Container>
      <TitleContainer>
        <Title>Navers</Title>

        <Button onPress={handleCreateNewUserNavigation}>Adicionar Naver</Button>
      </TitleContainer>

      <ProfilesList
        data={profiles}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item: profile, index }) => (
          <ProfileCard
            profile={profile as Profile}
            index={index}
            handleDeleteProfile={handleDeleteProfile}
          />
        )}
        ListEmptyComponent={() => {
          return (
            <EmptyListText>
              Nenhum Naver cadastrado, bora começar!
            </EmptyListText>
          );
        }}
      />
    </Container>
  );
};

export default Dashboard;
