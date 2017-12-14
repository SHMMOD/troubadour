import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import Auth0ViewContainer from './auth0/auth0_view_container';
import RootTabs from './tab_navigator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      currentUser: newProps.currentUser
    });
  }

  render() {
    // return this.state.currentUser ? <RootTabs /> : <Auth0ViewContainer />;
    return (
      <View style={{flex: 1}}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'SHMMOD', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <RootTabs />
      </View>
    ); // commented out the login screen for now
  }
}
