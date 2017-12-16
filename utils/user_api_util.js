export const fetchUser = (userId) =>{
  return fetch(`https://shmmod.herokuapp.com/api/users/${userId}`);

};
