import React from 'react';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import { List, ListItem } from 'react-native-elements';

export default class NotesIndex extends React.Component {
  constructor(props) {
    super(props);
    this._onPressItem = this._onPressItem.bind(this);
  }

  _onPressItem(id) {
    const key = `Note${id}`;
    console.log(key)
    return () => this.props.nav.navigate(key);
  }

  render() {
    // const notes = [{id: 3, name: 'note 3'}, {id: 4, name: 'note 2'}];
    //will get project passed in through props
    //only list the notes from that project
    //this.props.project.notes.map
    return (
      <List containerStyle={{marginBottom: 20}}>
        {
        this.props.project.notes.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              onPress={this._onPressItem(item.id)}
            />
          ))
        }
      </List>
    );
  }
}
