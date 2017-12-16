import React from 'react';
import {combineReducers} from 'redux';
import projectReducer from './project_reducer';
import ideasReducer from './ideas_reducer';

export default combineReducers({
  projects: projectReducer,
  ideas: ideasReducer
});
