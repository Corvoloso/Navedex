import React, { useRef } from 'react';
import { ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Profile } from '../../components/ProfileCard';

import { Container, Title } from './styles';

interface RouteParamsProps {
  title: string;
  handleSubmitForm: Promise<void>;
  defaultValues?: Omit<Profile, 'id'>;
}

const ProfileForm: React.FC = () => {
  const { params } = useRoute();

  const { title, defaultValues, handleSubmitForm } = params as RouteParamsProps;

  const formRef = useRef<FormHandles>(null);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>{title}</Title>

        <Form
          ref={formRef}
          initialData={defaultValues}
          onSubmit={handleSubmitForm}
        >
          <Input name="name" title="Nome" placeholder="Nome" />

          <Input name="job_role" title="Cargo" placeholder="Cargo" />

          <Input
            name="birthdate"
            title="Data de Nascimento"
            placeholder="Data de Nascimento (Exemplo: 18/05/2001)"
          />

          <Input
            name="admission_date"
            title="Data de admissão"
            placeholder="Data de admissão (Exemplo: 16/11/2020)"
          />

          <Input
            name="project"
            title="Projeto que participou"
            placeholder="Projeto que participou"
          />

          <Input
            name="url"
            title="Url da foto do naver"
            placeholder="Url da foto do naver"
          />

          <Button
            style={{ marginVertical: 40 }}
            onPress={() => formRef?.current?.submitForm()}
          >
            Salvar
          </Button>
        </Form>
      </ScrollView>
    </Container>
  );
};

export default ProfileForm;
