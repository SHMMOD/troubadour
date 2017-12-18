// import * as NoteUtil from '../utils/note_api_util';

import {createIdea} from '../utils/idea_api_util';

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


export const createSingleIdea = (ideaObject) => dispatch => {
  
  return createIdea({
    "projectId": "5a347bc80351924e4188b1bf",
    "userId": "5a347a71217e1d4e1c0f17a6",
    "fileType": "note"
  })
    .then(newIdea => {
      console.log(newIdea)
      newIdea.json().then(obj => {
        dispatch(receiveIdea(obj));

      })
      .catch(err => console.log('error:',err));
    });
};




//need to add thunk action creators
