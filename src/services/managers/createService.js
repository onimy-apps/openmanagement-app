import { getCookie } from '../../utils/cookies';

export const createService = (request) => {
  const PROJECTS_ENDPOINT = 'http://localhost:3000/api/v1/managers/projects/create';
  
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    },
    body: JSON.stringify(request.projectData)
  };

  return fetch(PROJECTS_ENDPOINT, parameters)
    .then(response => {
      if (response.status !== 200) {
        return { status: response.status, text: response.statusText }
      }
      return response.json();
    })
    .then(json => {
      return json;
    })
    .catch(error => {
      return error;
    });
};