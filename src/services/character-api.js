import request from 'superagent';

const URL = process.env.REACT_APP_API_URL;
export function getCharacters() {
  return fetch(`${URL}/api/v1/characters`)
  .then(res => res.json())


  
  
}
