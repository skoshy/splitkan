/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { Button, ButtonText } from '../components/Button';
import { BackgroundView, PostContainer } from '../components/Core/Containers';
import { SectionHeader } from '../components/Core/Text';
import { getFontStyle } from '../helpers/font';
import { stateMapper, actionsMapper, nameSpaces } from '../handlers';
import { timer } from 'rxjs';

class ThisComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item_to_payer: {},
      payer_to_item: {},
      item_payer_data: {},

      items: [],
      payers: [],
    };
  }

  addItem = () => {
    const { $actions } = this.props;
    const { items } = this.state;
    items.push({
      id: 'I-'+Math.random()+Date.now(),
      name: 'New ItemNew ItemNew ItemNew ItemNew ItemNew ItemNew ItemNew ItemNew ItemNew ItemNew ItemNew Item',
    });
    this.setState({ items });
    $actions.BILL.createItem();
  }

  addPayer = () => {
    const { $actions } = this.props;
    const { payers } = this.state;
    payers.push({
      id: 'P-'+Math.random() + Date.now(),
      name: 'Person',
    });
    this.setState({ payers });
  }

  addPayerToItem = (payer, item) => {
    const { item_to_payer, payer_to_item } = this.state;
    payer_to_item[payer.id] = payer_to_item[payer.id] || [];
    item_to_payer[item.id] = item_to_payer[item.id] || [];

    // TODO: get the key from the array if it's there
    let key = 'DATA-' + Math.random() + Date.now();
    payer_to_item[payer.id] = key;
    item_to_payer[item.id];
  }

  renderItems = () => {
    const { items, payers } = this.state;
    const itemsJsx = [];

    items.forEach((item) => {
      const addPayerButtons = payers.map((payer) => {
        return (
          <Button onPress={() => this.addPayerToItem(payer, item)}>
            <ButtonText>
              {`Add Payer (${payer.name})`}
            </ButtonText>
          </Button>
        );
      });

      itemsJsx.push((
        <View
          key={item.id}
          style={{
            backgroundColor: `white`,
            flex: 1,
          }}
        >
          <Text>{item.name}</Text>
          {addPayerButtons}
        </View>
      ));
    });

    return itemsJsx;
  }

  render = () => {
    return (
      <BackgroundView>
        <View style={{ flex: 1 }}>
          <ScrollView
            contentContainerStyle={{
              flex: 1,
            }}
            style={{
              flex: 1,
              backgroundColor: 'green',
            }}
          >
            <ScrollView
              horizontal={true}
              directionalLockEnabled={false}
              contentContainerStyle={{
                flexDirection: 'column',
                flex: 1,
              }}
              style={{
                flex: 1,
                backgroundColor: 'blue',
              }}
            >
              <Button onPress={this.addItem}>
                <ButtonText>Insert item</ButtonText>
              </Button>
              <Button onPress={this.addPayer}>
                <ButtonText>Insert payer</ButtonText>
              </Button>
              <Text
                style={{
                  ...getFontStyle(`Default`),
                  color: 'white',
                  fontSize: 20,
                }}
              >
                Hi there this is my text
              </Text>
              {this.renderItems()}
            </ScrollView>
          </ScrollView>
        </View>
      </BackgroundView>
    );
  }
};

export default connect(
  // variables from the store -> maps to this.props.$state
  stateMapper({
    theme: [nameSpaces.APP],
    getCurrentBill: [nameSpaces.BILL],
  }),

  // actions -> maps to this.props.$actions.{HANDLER_NAME}
  actionsMapper([
    nameSpaces.APP,
    nameSpaces.BILL,
  ]),
)(ThisComponent);
