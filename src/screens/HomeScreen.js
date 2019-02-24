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
import { Button, ButtonText } from '../components/Button';
import { stateMapper, actionsMapper, nameSpaces } from '../handlers';
import { getFontStyle } from '../helpers/font';

const ThisComponent = ({ navigation, $state, $actions }) => {
  const selectBill = (billLocalId) => {
    
  };

  const bills = $state.bills.map((bill) => (
    <Button
      key={bill.LocalId}
      onPress={() => {
        $actions.BILL.setCurrentBill(bill.LocalId);
      }}
    >
      <ButtonText
        style={{
          
        }}
      >
        {bill.Name}
        {$state.getCurrentBill ? $state.getCurrentBill.LocalId === bill.LocalId ? `Selected` : `` : ``}
      </ButtonText>
    </Button>
  ));

  return (
    <BackgroundView>
      <Button
        onPress={() => $actions.BILL.createBill()}
      >
        <ButtonText>Create bill</ButtonText>
      </Button>
      <Button
        onPress={() => $actions.BILL.resetAll()}
      >
        <ButtonText>Reset bills</ButtonText>
      </Button>
      <Header1>My Bills</Header1>
      {bills}
    </BackgroundView>
  );
};

export default connect(
  // variables from the store -> maps to this.props.$state
  stateMapper({
    theme: [nameSpaces.APP],
    bills: [nameSpaces.BILL],
    getCurrentBill: [nameSpaces.BILL],
  }),

  // actions -> maps to this.props.$actions.{HANDLER_NAME}
  actionsMapper([
    nameSpaces.APP,
    nameSpaces.BILL,
  ]),
)(ThisComponent);
