import React from 'react';
import { AppRegistry, SafeAreaView, StyleSheet } from 'react-native';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import AppContainer from './components/app_container';

const store = configureStore();

class FlexProject extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ddd'
  }
});

AppRegistry.registerComponent('FlexProject', () => FlexProject);
