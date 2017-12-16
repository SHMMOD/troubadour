import React from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import { Button, List, ListItem } from 'react-native-elements';

export default class ProjectsIndex extends React.Component {
  constructor(props) {
    super(props);
    this._onPressNew = this._onPressNew.bind(this);
    this._onPressItem = this._onPressItem.bind(this);
  }

  //hard code userId for now
  componentDidMount(){
    this.props.fetchProjects("5a3355134ecec93ed167650c");
    // fetch(`https://facebook.github.io/react-native/movies.json`)
    //   .then(resp => console.log(resp));
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

    console.log(this.props.projects);

    return (
      <View>
        <Button
          iconRight={{name: 'add-circle-outline'}}
          title="Create new project"
          backgroundColor="red"
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
                onPress={this._onPressItem(item.id)}
              />
            ))
          }
        </List>
      </View>
    );
  }
}
