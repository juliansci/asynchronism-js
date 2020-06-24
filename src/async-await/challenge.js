const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const URL_API = 'https://rickandmortyapi.com/api/character/';
const XHTTP_STATUS_COMPLETED = 4;
const HTTP_STATUS_OK = 200;

const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === XHTTP_STATUS_COMPLETED) {
        xhttp.status === HTTP_STATUS_OK ?
          resolve(JSON.parse(xhttp.responseText)) :
          reject(new Error(`Error in ${url}`));
      }
    };
    xhttp.send();
  });

}

const aFunction = async () => {
  try{
    const charactersData = await fetchData(URL_API);
    const characterId = charactersData && charactersData.results && charactersData.results[0] && charactersData.results[0].id;
    const character = await fetchData(`${URL_API}${characterId}`);
    const characterOriginUrl = character && character.origin && character.origin.url;
    const characterDimension = await fetchData(characterOriginUrl);
    console.log(charactersData.info.count);
    console.log(character.name);
    console.log(characterDimension.dimension);
  }catch(error){

  }
};

(async function() {
  console.log('aca1');
  await aFunction();
  console.log('aca2');
})();