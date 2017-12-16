// import { fetchUserProjects, fetchSingleProject } from '../utils/user_api_util';

export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

const receiveProject = (project) => ({
  type: RECEIVE_PROJECT,
  project
});



const removeProject = project => ({
  type: REMOVE_PROJECT,
  project
});
