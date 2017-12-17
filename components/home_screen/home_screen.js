import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import { colors } from '../styles/colors';
import RootTabs from './tab_navigator';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSingleUser("5a347a71217e1d4e1c0f17a6");
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          leftComponent={{ icon: 'music-note', color: colors.secondary }}
          centerComponent={{ text: 'Troubadour', style: { fontSize: 20, fontWeight: 'bold', color: colors.secondary } }}
          rightComponent={{ icon: 'menu', color: colors.secondary }}
          outerContainerStyles={{ backgroundColor: colors.primary }}
        />
        <RootTabs />
      </View>
    );
  }
}
