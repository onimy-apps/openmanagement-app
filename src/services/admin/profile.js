import { getCookie } from '../../utils/cookies';

export const profileService = (request) => {
  const query = `?id=${request.payload.id}&role=${request.payload.role}`;
  const LIST_ENDPOINT = `http://localhost:3000/api/v1/admin/profile${query}`;
  
  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    }
  };

  return fetch(LIST_ENDPOINT, parameters)
    .then(response => {
      if (response.status !== 200)
        return { status: response.status, text: response.statusText };
      return response.json();
    })
    .then(json => {
      return json;
    })
    .catch(error => {
      return error;
    });
};