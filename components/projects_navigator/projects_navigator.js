import React from 'react';
import { View, Text, Button } from 'react-native';
// import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
// import ProjectsIndexContainer from '../projects/projects_index_container';
import ProjectsStackNavigator from './projects_stack_navigator';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14


export default class ProjectsNavigator extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){

    if (!this.props.projects || !this.props.ideas) return null;

    //pass in this.props.projects instead of data
    const projects = this.props.projects;
    const ideas = this.props.ideas;
    console.log(projects);

    //won't need to pass notes in, can just get from projects
    const Navigate = ProjectsStackNavigator(projects,ideas);
    return <Navigate/>;
  }
}
