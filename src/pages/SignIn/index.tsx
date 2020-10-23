import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, TitleContainer } from './styles';
import { useAuth } from '../../hooks/auth';

interface SingInProps {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSignInSubmit = useCallback(async (data: SingInProps) => {
    try {
      signIn(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <TitleContainer>
        <Title>NAVE.RS</Title>
      </TitleContainer>

      <Form ref={formRef} onSubmit={handleSignInSubmit}>
        <Input name="email" title="E-mail" placeholder="E-mail" />
        <Input
          name="password"
          title="Senha"
          placeholder="Senha"
          secureTextEntry
          containerStyle={{ marginTop: 40 }}
        />

        <Button
          onPress={() => formRef.current?.submitForm()}
          style={{ marginTop: 40 }}>
          Entrar
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;
