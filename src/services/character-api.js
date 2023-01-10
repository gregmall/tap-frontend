const URL = 'https://tap-backend.adaptable.app';

export const getCharacters = () => {
  return fetch(`${URL}/api/v1/characters`)
    .then(res => res.json());

};

export const postCharacter = character => {

  
  return fetch(`${URL}/api/v1/characters`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(character),
  })
    .then(res => res.json());
};

export const getById = id => {

  return fetch(`${URL}/api/v1/characters/${id}`)
    .then(res => res.json());
};

export const updateById = (id, character) => {
  console.log(id, character);
  return fetch(`${URL}/api/v1/characters/${id}`,{
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(character),
  })
    .then(res => res.json());
  
  
};

export const deleteCharacter = id => {
  return fetch(`${URL}/api/v1/characters/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json());
};


