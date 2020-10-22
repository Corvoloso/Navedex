import React, { useCallback, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';

import { Container, Title, TitleContainer } from './styles';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { navigate } = useNavigation();

  const handleSignInSubmit = useCallback((data) => {
    console.log(data);

    navigate('Dashboard');
  }, []);

  return (
    <Container>
      <TitleContainer>
        <Title>NAVE.RS</Title>
      </TitleContainer>

      <Form ref={formRef} onSubmit={handleSignInSubmit}>
        <Input name="email" title="E-mail" placeholder="E-mail" />
        <Input name="password" title="Senha" placeholder="Senha" />

        <Button onPress={() => formRef.current?.submitForm()}>Entrar</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
