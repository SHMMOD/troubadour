import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import NotesIndexContainer from '../note/notes_index_container';
import React from 'react';
import { View, Text, Button } from 'react-native';
import NoteShow from '../note/note_show';
import NotesNavigator from '../notes_navigator/notes_navigator';

// const nav =

export default (notes) => {

  // const data = [{id: 3, name: 'my first project'}, {id: 4, name: 'a second project'}];

  const NotesScreen = ({ navigation }) => (
    <NotesIndexContainer navigation={navigation} />
  );


  //should return notes_navigator.js
  const NoteScreen = (note) => {
    return () => (
      // <View>
      //   <Text>{project.name}</Text>
      // </View>
      <NoteShow/>
    );
  };

  let navigatorOptions = {
    Notes: {
      screen: NotesScreen,
      navigationOptions: {
        // headerTitle: 'Notes'
        header: null
      }
    }
  };

  notes.forEach(note => {
    const stack = {
      screen: NoteScreen(note),
      navigationOptions: {
        headerTitle: 'Note'
      }
    };
    navigatorOptions[`Note${note.id}`] = stack;
  });

  //need to import StackNavigator not the function
  return StackNavigator(navigatorOptions);
}
