import { RECEIVE_IDEA, REMOVE_IDEA } from '../actions/idea_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

export default (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({},action.user.ideas);
    case RECEIVE_IDEA:
      return merge({}, oldState,{[action.idea._id]:action.idea});
    case REMOVE_IDEA:
      let newState = merge({},oldState);
      delete newState[action.idea._id];
      return newState;
    default:
      return oldState;
  }
};
