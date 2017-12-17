import { fetchUser } from '../utils/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const fetchSingleUser = (userId) => dispatch => {
  return fetchUser(userId)
    .then(resp => {
      resp.json().then(obj => {
        dispatch(receiveUser(obj));
      })
      .catch(err => console.log('error:', err));
    });
};
