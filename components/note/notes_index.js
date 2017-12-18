import React from 'react';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, List, ListItem } from 'react-native-elements';

export default class NotesIndex extends React.Component {
  constructor(props) {
    super(props);
    this._onPressItem = this._onPressItem.bind(this);
    this._onPressNote = this._onPressNote.bind(this);
    this._onPressRecording = this._onPressRecording.bind(this);
  }

  //items that already exist
  _onPressItem(id) {
    const key = `Idea${id}`;
    return () => this.props.nav.navigate(key);
  }

  //key shouldn't be note new, should have id
  _onPressNote(ideaObject) {

    return () => {
      this.props.createSingleIdea(ideaObject).then(idea => {
        console.log(idea)
        // const id = idea._id;
        const key = 'Idea';
        this.props.nav.navigate(key);
      });
    };
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


    //_projectId, userId, fileType
    // {
    //   "_projectId":  ,
    //   "userId": ,
    //   "fileType": "note"
    //
    // }

    //has access to this.props.project
    const ideaObject = {
      "projectId": this.props.project._id,
      "userId": "5a347a71217e1d4e1c0f17a6",
      "fileType": "note"
    };


    return (
      <ScrollView>
      <View style={styles.container}>
        <Button
          iconRight={{name: 'add-circle-outline'}}
          title="Create new note"
          backgroundColor="red"
          containerViewStyle={styles.button}
          borderRadius={4}
          onPress={this._onPressNote(ideaObject)}
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
                title={item.name}
                onPress={this._onPressItem(item._id)}
                leftIcon={{name: 'music-note'}}
                />
            ))
          }
        </List>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    borderRadius: 4
  },
  container: {
    flex: 1,

  }
});
