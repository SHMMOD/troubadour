import React from 'react';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import { StyleSheet, View } from 'react-native';
import { Button, List, ListItem } from 'react-native-elements';

export default class NotesIndex extends React.Component {
  constructor(props) {
    super(props);
    this._onPressItem = this._onPressItem.bind(this);
    this._onPressNote = this._onPressNote.bind(this);
    this._onPressRecording = this._onPressRecording.bind(this);
  }

  _onPressItem(id) {
    const key = `Idea${id}`;
    return () => this.props.nav.navigate(key);
  }

  _onPressNote(id) {
    const key = 'NoteNew';
    return () => this.props.nav.navigate(key);
  }

  _onPressRecording(id) {
    const key = 'RecordingNew';
    return () => this.props.nav.navigate(key);
  }

  render() {
    // const notes = [{id: 3, name: 'note 3'}, {id: 4, name: 'note 2'}];
    //will get project passed in through props
    //only list the notes from that project

    //this.props.ideas
    //this.props.project.id === this.props.idea.projectId


    const relevantIdeas = this.props.ideas.filter((idea) => {
      if (idea.projectId === this.props.project._id) {
        return idea;
      }
    });

    return (
      <View>
        <Button
          iconRight={{name: 'add-circle-outline'}}
          title="Create new note"
          backgroundColor="red"
          containerViewStyle={styles.button}
          borderRadius={4}
          onPress={this._onPressNote()}
          />
        <Button
          iconRight={{name: 'add-circle-outline'}}
          title="Create new recording"
          backgroundColor="red"
          containerViewStyle={styles.button}
          borderRadius={4}
          onPress={this._onPressRecording()}
          />
        <List containerStyle={{marginBottom: 20}}>
          {
            relevantIdeas.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                onPress={this._onPressItem(item._id)}
                leftIcon={{name: 'music-note'}}
                />
            ))
          }
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    borderRadius: 4
  }
});
