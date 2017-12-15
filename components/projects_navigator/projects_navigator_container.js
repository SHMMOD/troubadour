import React from 'react';
import { connect } from 'react-redux';
import {values} from 'lodash';
import ProjectsNavigator from './projects_navigator';

const mapStateToProps = state => ({
  projects: Object.values(state.entities.projects)
});


const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps
)(ProjectsNavigator);
