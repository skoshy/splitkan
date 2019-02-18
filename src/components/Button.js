import React from 'react';
import styled from 'styled-components';
import { getFontStyleAsCss } from '../helpers/font';

export const Button = styled.TouchableOpacity`
  background-color: ${props => props.theme.button.background};
`;

console.log(getFontStyleAsCss(`Default`));

export const ButtonText = styled.Text`
  ${getFontStyleAsCss(`Default`)}
  color: ${props => props.theme.button.text};
`;
