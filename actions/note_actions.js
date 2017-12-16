// import * as NoteUtil from '../utils/note_api_util';

export const RECEIVE_IDEA = 'RECEIVE_IDEA';
export const REMOVE_IDEA = 'REMOVE_IDEA';

const receiveIdea = (idea) => ({
  type: RECEIVE_IDEA,
  idea
});

const removeIdea = idea => ({
  type: REMOVE_IDEA,
  idea
});

//need to add thunk action creators
