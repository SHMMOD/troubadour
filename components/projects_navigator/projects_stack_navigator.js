import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import ProjectsIndexContainer from '../projects/projects_index_container';
import React from 'react';
import { View, Text, Button } from 'react-native';
import NoteShow from '../note/note_show';
import NotesNavigator from '../notes_navigator/notes_navigator';
import NotesIndexContainer from '../note/notes_index_container';

export default (projects,notes) => {

  // const data = [{id: 3, name: 'my first project'}, {id: 4, name: 'a second project'}];
  const ProjectsScreen = ({ navigation }) => (
    <ProjectsIndexContainer navigation={navigation} />
  );

  const ProjectScreen = ({navigation}) => {
    return <NotesIndexContainer nav={navigation} />
  };

  const NoteScreen = () => {
      return <NoteShow/>
  };

  let navigatorOptions = {
    Projects: {
      screen: ProjectsScreen,
      navigationOptions: {
        headerTitle: 'Projects'      }
    }
  };

  notes.forEach(note => {
    const stack = {
      screen: NoteScreen,
      navigationOptions: {
        headerTitle: 'Note'
      }
    };
    navigatorOptions[`Note${note.id}`] = stack;
  });

  projects.forEach(project => {
    const stack = {
      screen: ProjectScreen,
      navigationOptions: {
        headerTitle: 'Project'
      }
    };
    navigatorOptions[`Project${project.id}`] = stack;
  });

  //need to import StackNavigator not the function
  return StackNavigator(navigatorOptions);
}
