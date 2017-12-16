import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import RootTabs from './tab_navigator';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProjects("5a3355134ecec93ed167650c");
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          leftComponent={{ icon: 'music-note', color: '#fff' }}
          centerComponent={{ text: 'SHMMOD', style: { color: '#fff' } }}
          rightComponent={{ icon: 'menu', color: '#fff' }}
          outerContainerStyles={{ backgroundColor: 'red' }}
        />
        <RootTabs />
      </View>
    );
  }
}
