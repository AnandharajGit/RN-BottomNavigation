import React from 'react';
import { createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Feed from '../screens/Feed';
import Notifications from '../screens/Notifications';
import { TouchableOpacity } from 'react-native';
import Profile from '../screens/Profile';

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Feed,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name={tabInfo.focused ? 'ios-home' : 'ios-home-outline'}
            size={23}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    Exams: {
      screen: Notifications,
      navigationOptions: {
        tabBarLabel: 'Exams',
        tabBarIcon: tabInfo => (
          <Ionicons
            name={tabInfo.focused ? 'book' : 'book-outline'}
            size={23}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: tabInfo => (
          <Ionicons
            name={tabInfo.focused ? 'person' : 'person-outline'}
            size={23}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
  },
  {
    renderTouchable: props => <TouchableOpacity {...props} activeOpacity={1} />,
    backBehavior: 'none',
    barStyle: { height: '8.5%' },
  },
);

export default createAppContainer(TabNavigator);
