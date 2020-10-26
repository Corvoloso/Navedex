import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  textStyle?: {};
  icon?: string;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({
  textStyle,
  icon,
  color,
  children,
  ...rest
}) => {
  return (
    <Container {...rest}>
      {icon && <Icon color={color} name={icon} size={24} />}
      <ButtonText style={textStyle}>{children}</ButtonText>
    </Container>
  );
};

export default Button;
