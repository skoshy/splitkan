import React from 'react';
import styled from 'styled-components';

export const Button = styled.TouchableOpacity`
  background-color: ${props => props.theme.button.background};
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.button.text};
`;
