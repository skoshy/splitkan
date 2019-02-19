import React from 'react';
import {
  Text,
} from 'react-native';
import styled, { withTheme } from 'styled-components';
import { getFontStyleAsCss } from '../../helpers/font';

export const BodyText = styled.Text`
  ${getFontStyleAsCss(`Default`)}
  font-size: 16;
  color: ${props => props.theme.textColor};
`;

export const Header1 = styled(BodyText)`
  ${getFontStyleAsCss(`Default`, `bold`)}
  font-size: 24;
`;

export const Header2 = styled(Header1)`
  font-size: 20;
`;

export const Header3 = styled(Header1)`
  font-size: 18;
`;

export const SectionHeader = styled(Header1)`
  font-size: 12;
  padding-top: 5;
  padding-left: 5;
`;
