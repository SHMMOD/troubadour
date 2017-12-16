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
    // const data = [{id: 3, name: 'my first project', notes:[{id: 3, title: 'note 1',body: 'sdfsdf'}, {id: 4, name: 'note 2'}] },
    //               {id: 4, name: 'a second project'}];
    // const notes = [{id: 3, name: 'note 1'}, {id: 4, name: 'note 2'}];

    // console.log(this.props.projects)
    
    if (!this.props.projects) return null;

    //pass in this.props.projects instead of data
    const projects = this.props.projects;
    console.log(projects);

    //won't need to pass notes in, can just get from projects
    const Navigate = ProjectsStackNavigator(projects);
    return <Navigate/>;
  }
}
