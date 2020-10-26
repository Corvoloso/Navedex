import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logoImg.png';

import { Container, TitleContainer, Image } from './styles';

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
    <KeyboardAvoidingView
      style={{
        flex: 1,
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}>
        <Container>
          <TitleContainer>
            <Image source={logoImg} />
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
