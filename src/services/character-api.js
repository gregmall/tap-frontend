const URL = process.env.REACT_APP_API_URL;

export const getCharacters = () => {
  return fetch(`${URL}/api/v1/characters`)
  .then(res => res.json())

  }


  // export const  getCharacters = async () =>{
  //   const res = await fetch(`${URL}/api/v1/characters`);
  //   const json = await res.json();
  //   console.log(json)
    
   
  
  //   return json.map(character => ({
  //     id: character.id,
  //     name: character.name,
  //     image: character.image,
  //     quote: character.quote,
  //     role: character.role
      
  //   }));
    
  // };
