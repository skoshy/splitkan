/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  ScrollView,
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { BackgroundView } from '../components/Core/Containers';
import { Header1, BodyText } from '../components/Core/Text';
import { stateMapper, actionsMapper, nameSpaces } from '../handlers';
import { getFontStyle } from '../helpers/font';

const ThisComponent = ({ navigation, $state }) => {
  return (
    <BackgroundView>
      <Header1>Test</Header1>
      <BodyText>
        This is the body of my stuff
      </BodyText>
    </BackgroundView>
  );
};

export default connect(
  // variables from the store -> maps to this.props.$state
  stateMapper({
    theme: [nameSpaces.APP],
  }),

  // actions -> maps to this.props.$actions.{HANDLER_NAME}
  actionsMapper([
    nameSpaces.APP,
  ]),
)(ThisComponent);
