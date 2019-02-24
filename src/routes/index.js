import React from 'react';
import {
  createDrawerNavigator,
  createStackNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation';
import { withNavigationRedux } from './withNavigationRedux';
import CustomDrawerContentComponent from './CustomDrawerContent';
import HomeScreen from '../screens/HomeScreen';
import SplitScreen from '../screens/SplitScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {
  defaultNavigatorOptions,
  getNavOptionsVars,
  HeaderButton,
} from './helpers';
import { BodyText } from '../components/Core/Text';

const SplitStack = createMaterialTopTabNavigator(
  {
    SplitScreen: {
      screen: withNavigationRedux(SplitScreen),
      navigationOptions: ({ navigation }) => {
        const { theme } = getNavOptionsVars(navigation);

        return {
          title: `Home`,
          headerLeft: (
            <HeaderButton
              theme={theme}
              onPress={() => { navigation.openDrawer(); }}
              icon="bars"
            />
          ),
          headerRight: (
            <HeaderButton
              theme={theme}
              onPress={() => { navigation.navigate(`SettingsScreen`); }}
              icon="cog"
            />
          ),
        };
      },
    },
    SplitScreen2: {
      screen: withNavigationRedux(SplitScreen),
      navigationOptions: ({ navigation }) => {
        const { theme } = getNavOptionsVars(navigation);

        return {
          title: `Home`,
          headerLeft: (
            <HeaderButton
              theme={theme}
              onPress={() => { navigation.openDrawer(); }}
              icon="bars"
            />
          ),
          headerRight: (
            <HeaderButton
              theme={theme}
              onPress={() => { navigation.navigate(`SettingsScreen`); }}
              icon="cog"
            />
          ),
        };
      },
    },
  },
  {
    ...defaultNavigatorOptions,
    headerMode: `none`,
    navigationOptions: ({ navigation }) => {
      const { defaultHeaderStyles } = getNavOptionsVars(navigation);

      return {
        ...defaultHeaderStyles,
      };
    },
  },
);

export const Stack = createStackNavigator(
  {
    // SplitScreen: SplitStack,
    HomeScreen: {
      screen: withNavigationRedux(HomeScreen),
      navigationOptions: ({ navigation }) => {
        const { theme, defaultHeaderStyles } = getNavOptionsVars(navigation);

        return {
          title: `Post`,
          // headerTitle: ({ children }) => (
          //   <BodyText>
          //     {children}
          //   </BodyText>
          // ),
          headerLeft: (
            <HeaderButton
              theme={theme}
              onPress={() => { navigation.goBack(); }}
              icon="arrow-left"
            />
          ),
        };
      },
    },
  },
  {
    ...defaultNavigatorOptions,
    navigationOptions: ({ navigation }) => {
      const { defaultHeaderStyles } = getNavOptionsVars(navigation);

      console.log(defaultHeaderStyles);

      return {
        ...defaultHeaderStyles,
      };
    },
  },
);

export const LoggedInRoute = createDrawerNavigator(
  {
    Main: Stack,
  },
  {
    ...defaultNavigatorOptions,
    contentComponent: CustomDrawerContentComponent,
  },
);

// export const SettingsRoute = createStackNavigator(
//   {
//     SettingsScreen: {
//       screen: withNavigationRedux(SettingsScreen),
//       navigationOptions: ({ navigation }) => {
//         const { theme } = getNavOptionsVars(navigation);

//         return {
//           headerRight: (
//             <HeaderButton
//               theme={theme}
//               onPress={() => { navigation.dismiss(); }}
//               icon="times"
//             />
//           ),
//         };
//       },
//     },
//   },
//   {
//     ...defaultNavigatorOptions,
//     navigationOptions: ({ navigation }) => {
//       const { defaultHeaderStyles } = getNavOptionsVars(navigation);

//       return {
//         ...defaultHeaderStyles,
//         title: `Settings`,
//       };
//     },
//   },
// );


export const DefaultRoute = createStackNavigator(
  {
    Main: LoggedInRoute,
    // SettingsScreen: SettingsRoute,
  },
  {
    ...defaultNavigatorOptions,
    mode: `modal`,
    headerMode: `none`,
  },
);
