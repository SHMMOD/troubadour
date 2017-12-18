import { RECEIVE_PROJECT, REMOVE_PROJECT } from '../actions/project_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

export default (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({},action.user.projects);
    case RECEIVE_PROJECT:
      return merge({}, oldState,{[action.project._id]:action.project});
    case REMOVE_PROJECT:
      let newState = merge({},oldState);
      delete newState[action.project._id];
      return newState;
    default:
      return oldState;
  }
};
