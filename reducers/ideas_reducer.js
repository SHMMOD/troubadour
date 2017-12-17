import { RECEIVE_IDEA, REMOVE_IDEA } from '../actions/idea_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

export default (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({},action.user.files);
    case RECEIVE_IDEA:
      return merge({}, oldState,{[action.file.id]:action.file});
    case REMOVE_IDEA:
      let newState = merge({},oldState);
      delete newState[action.file.id];
      return newState;
    default:
      return oldState;
  }
};
