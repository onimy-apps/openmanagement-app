import { getCookie } from '../../utils/cookies';

export const listService = (request) => {
  const LIST_ENDPOINT = 'http://localhost:3000/api/v1/admin/list';
  
  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    }
  };

  return fetch(LIST_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};