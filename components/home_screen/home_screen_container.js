import React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import { fetchSingleUser } from '../../actions/user_actions';
import HomeScreen from './home_screen';

const mapStateToProps = state => ({
  // projects: Object.values(state.entities.projects)
  projects:[{id:2,userId:1, name: "project1"},{id:3, userId:1, name: "project2",}],
  ideas: [{id: 1, projectId: 2, title:"project1note",body:"adfadsfadf"},{id:2, projectId: 2,title:"another Project1 note",body:"sdf"},
  {id: 3,projectId: 3,title:"project2note",body:"adfadf"},{id:4,projectId: 3,title:"project2note2",body:"sdf"}]

  // projects: state.entities.projects,
  // ideas: state.entities.ideas
});

const mapDispatchToProps = dispatch => ({
  fetchSingleUser: (userId) => dispatch(fetchSingleUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
