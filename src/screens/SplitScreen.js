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
      items: [],
      payers: [],
    };
  }

  addItem = () => {
    const { items } = this.state;
    items.push({
      id: Math.random()+Date.now(),
      name: 'New ItemNew ItemNew ItemNew ItemNew ItemNew ItemNew ItemNew ItemNew ItemNew ItemNew ItemNew Item',
    });
    this.setState({ items });
  }

  renderItems = () => {
    const { items } = this.state;
    const itemsJsx = [];

    items.forEach((item) => {
      itemsJsx.push((
        <View
          key={item.id}
          style={{

          }}
        >
          <Text>{item.name}</Text>
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
              }}
              style={{
                flex: 1,
                backgroundColor: 'blue',
              }}
            >
              <Button onPress={this.addItem}>
                <ButtonText>Insert item</ButtonText>
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
  }),

  // actions -> maps to this.props.$actions.{HANDLER_NAME}
  actionsMapper([
    nameSpaces.APP,
  ]),
)(ThisComponent);
