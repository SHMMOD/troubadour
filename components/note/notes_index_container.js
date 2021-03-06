import React from 'react';
import { connect } from 'react-redux';
import {values} from 'lodash';
import { toArray } from '../../reducers/selectors';
// import { fetchProjects, fetchProject } from '../../actions/project_actions';
import NotesIndex from './notes_index';
import {createSingleIdea} from '../../actions/idea_actions';


const mapStateToProps = state => ({

  // projects:[{id:2,userId:1, name: "project1"},{id:3, userId:1, name: "project2",}],
  // ideas: [{id: 1, projectId: 2, title:"project1note",body:"adfadsfadf"},{id:2, projectId: 2,title:"another Project1 note",body:"sdf"},
  // {id: 3,projectId: 3,title:"project2note",body:"adfadf"},{id:4,projectId: 3,title:"project2note2",body:"sdf"}]

  projects: toArray(state.entities, 'projects'),
  ideas: toArray(state.entities, 'ideas')
});

const mapDispatchToProps = dispatch => ({
  // fetchProjects: (userId) => dispatch(fetchProjects(userId))
  createSingleIdea: (ideaObject) => dispatch(createSingleIdea(ideaObject))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndex);
