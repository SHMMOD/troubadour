import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import Auth0ViewContainer from './auth0/auth0_view_container';
import HomeScreenContainer from './home_screen/home_screen_container';

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
    // return this.state.currentUser ? <HomeScreenContainer /> : <Auth0ViewContainer />;
    return (
      <HomeScreenContainer />
    ); // commented out the login screen for now
  }
}
