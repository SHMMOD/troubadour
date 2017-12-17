export const createIdea = (ideaObject) =>{
  return fetch(`https://shmmod.herokuapp.com/api/ideas`);

};

//_projectId, userId, fileType
// {
//   "_projectId":  ,
//   "userId": ,
//   "fileType": "note"
//
// }
