import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.14

import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2
import ProjectsNavigatorContainer from '../projects_navigator/projects_navigator_container';

//change to projects navigator container
const ProjectsScreen = () => (
  <ProjectsNavigatorContainer/>
);

const IdeasScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Ideas Screen</Text>
  </View>
);

const FavoritesScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Favorites Screen</Text>
  </View>
);


const RootTabs = TabNavigator({
  Projects: {
    screen: ProjectsScreen,
    navigationOptions: {
      tabBarLabel: 'Projects',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Ideas: {
    screen: IdeasScreen,
    navigationOptions: {
      tabBarLabel: 'Ideas',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-bulb' : 'ios-bulb-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-star' : 'ios-star-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  }
});

export default RootTabs;
