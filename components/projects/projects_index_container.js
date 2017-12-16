import React from 'react';
import { connect } from 'react-redux';
import {values} from 'lodash';
import { fetchProjects, fetchProject } from '../../actions/project_actions';
import ProjectsIndex from './projects_index';

const mapStateToProps = state => ({
  // projects: Object.values(state.entities.projects)
  projects:[{
    id:2,
    name: "project1",
    notes: [{
      id: 1,
      title:"project1note",
      body:"adfadsfadf"
    },
    {
      id:2,
      title:"another Project1 note",
      body:"sdf"
    }]
  },
  {
    id:3,
    name: "project2",
    notes: [{
      id: 3,
      title:"project2note",
      body:"adfadf"
    },
    {
      id:4,
      title:"project2note2",
      body:"sdf"
    }]
  }]
});


const mapDispatchToProps = dispatch => ({
  fetchProjects: (userId) => dispatch(fetchProjects(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsIndex);
