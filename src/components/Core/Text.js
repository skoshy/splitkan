import React from 'react';
import {
  Text,
} from 'react-native';
import styled, { withTheme } from 'styled-components';
import { getFontStyleAsCss } from '../../helpers/font';

export const Header1 = styled.Text`
  ${getFontStyleAsCss(`Default`, `bold`)}
  font-size: 24;
  color: ${props => props.theme.textColor};
`;

export const Header2 = styled.Text`
  ${getFontStyleAsCss(`Default`, `bold`)}
  font-size: 20;
  color: ${props => props.theme.textColor};
`;

export const Header3 = styled.Text`
  ${getFontStyleAsCss(`Default`, `bold`)}
  font-size: 18;
  color: ${props => props.theme.textColor};
`;

export const BodyText = styled.Text`
  ${getFontStyleAsCss(`Default`, `bold`)}
  font-size: 16;
  color: ${props => props.theme.textColor};
`;

export const SectionHeader = styled.Text`
  ${getFontStyleAsCss(`Default`, `bold`)}
  font-size: 12;
  color: ${props => props.theme.textColor};
  padding-top: 5;
  padding-left: 5;
`;
