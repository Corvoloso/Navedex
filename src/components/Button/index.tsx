import React from 'react';
import { Container, ButtonText } from './styles';

const Button: React.FC = ({ children, ...rest }) => {
  return (
    <Container>
      <ButtonText {...rest}>{children}</ButtonText>
    </Container>
  );
};

export default Button;
