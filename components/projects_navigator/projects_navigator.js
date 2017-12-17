import React from 'react';
import { View, Text, Button } from 'react-native';
// import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
// import ProjectsIndexContainer from '../projects/projects_index_container';
import ProjectsStackNavigator from './projects_stack_navigator';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14


export default class ProjectsNavigator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: this.props.projects,
      ideas: this.props.ideas
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      projects: newProps.projects,
      ideas: newProps.ideas
    });
  }

  render() {
    if (!this.state.projects.length || !this.state.ideas.length) return null;

    const projects = this.state.projects;
    const ideas = this.state.ideas;

    //won't need to pass notes in, can just get from projects
    const Navigate = ProjectsStackNavigator(projects, ideas);
    return <Navigate/>;
  }
}
