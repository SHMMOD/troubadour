export const createIdea = (ideaObject) =>{
  console.log(ideaObject);
  return fetch(`https://shmmod.herokuapp.com/api/ideas`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ideaObject)
  });

};

//_projectId, userId, fileType
// {
//   "_projectId":  ,
//   "userId": ,
//   "fileType": "note"
//
// }
