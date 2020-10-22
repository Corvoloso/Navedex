import React, { useEffect, useRef } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, Title, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  title: string;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({ name, title, ...rest }) => {
  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputElementRef = useRef<any>(null);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
  }, [registerField, fieldName, inputValueRef]);

  return (
    <Container>
      <Title>{title}</Title>

      <TextInput
        ref={inputElementRef}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  );
};

export default Input;
