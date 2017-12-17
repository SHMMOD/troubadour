import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import ProjectsIndexContainer from '../projects/projects_index_container';
import React from 'react';
import { View, Text, Button } from 'react-native';
import NoteShow from '../note/note_show';
import NotesIndexContainer from '../note/notes_index_container';
import ProjectNew from '../project_new/project_new';
import RecordingNew from '../recording_new/recording_new';

//won't need notes
export default (projects, ideas) => {

  const ProjectsScreen = ({ navigation }) => (
    <ProjectsIndexContainer navigation={navigation} />
  );

  //this needs to be only the notes/files from a particular project, not the whole notes index from a user
  //also might not need notes index container
  //need to pass in the project to notesindex component
  const ProjectScreen = (project) => {
    return ({navigation}) => (
      <NotesIndexContainer nav={navigation} project={project} />
    );
  };

  const IdeaScreen = (idea) => {
    return ({navigation}) => (
      <NoteShow idea={idea} />
    );
  };

  const ProjectNewScreen = () => (
    <ProjectNew />
  );

  const RecordingNewScreen = () => (
    <RecordingNew />
  );

  const NoteNewScreen = () => (
    <NoteShow />
  );

  let navigatorOptions = {
    Projects: {
      screen: ProjectsScreen,
      navigationOptions: {
        headerTitle: 'Projects'
      }
    },
    ProjectNew: {
      screen: ProjectNewScreen,
      navigationOptions: {
        headerTitle: 'Create Project'
      }
    },
    NoteNew: {
      screen: NoteNewScreen,
      navigationOptions: {
        headerTitle: 'Create Note'
      }
    },
    RecordingNew: {
      screen: RecordingNewScreen,
      navigationOptions: {
        headerTitle: 'Create Recording'
      }
    }
  };

  projects.forEach(project => {
    const projstack = {
      screen: ProjectScreen(project),
      navigationOptions: {
        headerTitle: 'Project'
      }
    };
    navigatorOptions[`Project${project._id}`] = projstack;
  });

  //populate stack navigator with all notes
  ideas.forEach(idea => {
    const ideastack = {
      screen: IdeaScreen(idea),
      navigationOptions: {
        headerTitle: 'Idea'
      }
    };
      navigatorOptions[`Idea${idea._id}`] = ideastack;
  });

  return StackNavigator(navigatorOptions);
};
