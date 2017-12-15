import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import ProjectsIndexContainer from '../projects/projects_index_container';
import React from 'react';
import { View, Text, Button } from 'react-native';

// const nav =

export default (projects) => {

  // const data = [{id: 3, name: 'my first project'}, {id: 4, name: 'a second project'}];

  const ProjectsScreen = ({ navigation }) => (
    <ProjectsIndexContainer navigation={navigation} />
  );
  //screen is for going inside a project: should be project.name
  const ProjectScreen = (project) => {
    return () => (
      <View>
        <Text>{project.name}</Text>
      </View>
    );
  };

  let navigatorOptions = {
    Projects: {
      screen: ProjectsScreen,
      navigationOptions: {
        headerTitle: 'Projects'
      }
    }
  };

  projects.forEach(project => {
    const stack = {
      screen: ProjectScreen(project),
      navigationOptions: {
        headerTitle: 'Project'
      }
    };
    navigatorOptions[`Project${project.id}`] = stack;
  });

  //need to import StackNavigator not the function
  return StackNavigator(navigatorOptions);
}
