import React from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import { Button, List, ListItem } from 'react-native-elements';
import { colors } from '../styles/colors';

export default class ProjectsIndex extends React.Component {
  constructor(props) {
    super(props);
    this._onPressNew = this._onPressNew.bind(this);
    this._onPressItem = this._onPressItem.bind(this);
  }

  _onPressNew() {
    this.props.navigation.navigate('ProjectNew');
  }

  _onPressItem(id) {
    const key = `Project${id}`;
    return () => this.props.navigation.navigate(key);
  }

  render() {
    // const data = [{id: 3, name: 'my first project'}, {id: 4, name: 'a second project'}];
    return (
      <View>
        <Button
          iconRight={{name: 'add-circle-outline'}}
          title="Create new project"
          backgroundColor={colors.button}
          containerViewStyle={{marginTop: 20, borderRadius: 4}}
          borderRadius={4}
          onPress={this._onPressNew}
          />
        <List containerStyle={{marginBottom: 20}}>
          {
            this.props.projects.map((item, i) => (
              <ListItem
                key={i}
                title={item.name}
                onPress={this._onPressItem(item._id)}
              />
            ))
          }
        </List>
      </View>
    );
  }
}
