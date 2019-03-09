import { getCookie } from '../../utils/cookies';

export const projectsService = (request) => {
  const PROJECTS_ENDPOINT = `http://localhost:3000/api/v1/employee/projects?id=${request.user.id}&role=${request.user.role}`;
  
  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    }
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